import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function SelectedPost() {
  let { id } = useParams();
  const [post, setPost] = useState({ author: "", body: "", title: "" });
  useEffect(() => {
    Axios.get("http://localhost:3000/posts/" + id).then((result) => {
      const posts = result.data;
      setPost(posts);
    });
  }, []);
  console.log(post);
  return (
    <div className="card mb-2 mx-2">
      <div className="card-body ">
        <div className="row">
          <h5 className="mt-3 col-6">{post.author}</h5>
        </div>
        <p className="card-text">{post.title}</p>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}
