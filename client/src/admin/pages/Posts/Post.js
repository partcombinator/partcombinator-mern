import React, {useState} from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Actions Redux
import { createNewPostAction } from "../../../_actions/postsActions";

export default function Post() {
   
  const[title, setTitle] = useState('');
  const[text, setText] = useState('');

  const dispatch = useDispatch();
  const addPost = ( post ) => dispatch(createNewPostAction(post));

  const submitNewPost = (e) => {
    e.preventDefault();
    // Validate Form data
    if(title.trim()  === '' || text.trim === ''){
        toast.error(`The title and text are required`);
    } else {
        // Errors errors
        // Create new Post
        addPost({
            title,
            text
        });

        toast.success(`Save`);
    }
    
  };

  return (
    <AdminLayout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <Link to="/admin/posts">
          {" "}
          <h1 className="h3 mb-0 text-gray-800">Post</h1>
        </Link>
      </div>
    
      <form onSubmit={submitNewPost}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <button type="submit" class="btn btn-primary btn-icon-split">
            <span class="icon text-white-50">
              <i class="fas fa-edit"></i> SAVE{" "}
            </span>
          </button>
        </div>
        <div className="card-body">
          
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Your Title"
                name="title"
                value={title}
                onChange={ e => setTitle(e.target.value) }
              />
            </div>

            <div class="form-group">
              <label>Text</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="text"
                onChange={ e => setText(e.target.value) }
              >{text}</textarea>
            </div>
        </div>
      </div>
      </form>

    </AdminLayout>
  );
}
