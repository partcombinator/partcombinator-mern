import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import "../../../i18n/i18n";

// Redux Component
import { useSelector, useDispatch } from "react-redux";
import {
  givePostAction,
  detelePOstAction,
  getPostEdit,
} from "../../../_actions/postsActions";

export default function Posts() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [reloadLines, setReloadLines] = useState(false);

  const confirmDeletePost = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(detelePOstAction(id));
        setReloadLines(true);
      } else {
        swal("Your data is safe!");
      }
    });
  };

  // give the state
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    const loadPost = () => dispatch(givePostAction());
    loadPost();
    setReloadLines(false);
  }, [reloadLines, dispatch]);

  const redirectEdit = (post) => {
    dispatch(getPostEdit(post));
    history.push(`/admin/post/edit/${post._id}`);
  };

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{t("Posts_List")}</h1>
      </div>

      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error</strong> {error}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {loading ? <p className="text-center">Loading... </p> : null}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <Link to="/admin/post-new" className="btn btn-primary btn-icon-split">
            {" "}
            <span className="icon text-white-50">
              <i className="fas fa-edit"></i> {t("Create")}
            </span>
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {posts && (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>{t("Title")}</th>
                    <th>{t("Date")}</th>
                    <th width="10px">{t("Edit")}</th>
                    <th width="10px">{t("Delete")}</th>
                  </tr>
                </thead>
                <tbody>
                  {posts &&
                    posts.map((post) => (
                      <tr key={post._id}>
                        <td>{post.title}</td>
                        <td>{post.date}</td>
                        <td>
                          <button
                            onClick={() => confirmDeletePost(post._id)}
                            className="btn btn-danger btn-icon-split"
                          >
                            <span className="icon text-white-50">
                              <i className="fas fa-trash"></i>
                            </span>
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => redirectEdit(post)}
                            className="btn btn-warning btn-icon-split"
                          >
                            <span className="icon text-white-50">
                              <i className="fas fa-pen"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
