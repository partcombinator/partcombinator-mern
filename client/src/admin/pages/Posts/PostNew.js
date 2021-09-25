import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

// Actions Redux
import { createNewPostAction } from "../../../_actions/postsActions";

export default function PostNew() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const addPost = (post) => dispatch(createNewPostAction(post));

  function initialValues() {
    return {
      title: "",
      text: "",
    };
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData, { resetForm }) => {
      try {
        addPost(formData);
        resetForm({ values: "" }); // Limpiamos el formulario
        toast.success("Save");
        history.push("/admin/posts");
      } catch (error) {
        toast.error("Error");
      }
    },
  });

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <Link to="/admin/posts">
          {" "}
          <h1 className="h3 mb-0 text-gray-800">Post</h1>
        </Link>
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

      <form onSubmit={formik.handleSubmit}>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <button type="submit" className="btn btn-primary btn-icon-split">
              <span className="icon text-white-50">
                <i className="fas fa-edit"></i> {!loading ? "SAVE" : "LOADING"}
              </span>
            </button>

            {/* <button type="submit" className="btn btn-warning btn-icon-split ml-2">
              <span className="icon text-white-50">
                <i className="fas fa-edit"></i> {!loading ? "EDIT" : "LOADING"}
              </span>
            </button> */}
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Text</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Your Text"
                rows="10"
                name="text"
                onChange={formik.handleChange}
                required
                value={formik.values.text}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    text: Yup.string().required(true),
  };
}
