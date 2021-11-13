import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { addPost } from "../Redux/actions/post";
export default function Dashboard(props) {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const posting = () => {
    dispatch(addPost(post));
    console.log(posts);
    //navigate("/");
  };

  const onInputChange = (evt) => {
    const value = evt.target.value;
    setPost({
      ...post,
      [evt.target.name]: value,
    });
    console.log(post);
  };

  return (
    <div>
      <div className="card mb-2 mx-2">
        <div className="card-header">Featured</div>
        <div className="card-body ">
          <h5 className="card-title">Special title treatment</h5>
          <div className="mb-3">
            <div className="form-group">
              <label>Author</label>
              <input
                onChange={onInputChange}
                name="author"
                type="text"
                className="form-control"
              />
              <label>Title</label>
              <input
                onChange={onInputChange}
                name="title"
                type="text"
                className="form-control"
              />
              <label>Body</label>
              <input
                onChange={onInputChange}
                name="body"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button onClick={posting} className="btn btn-primary">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
