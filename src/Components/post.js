import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div className="card mb-2 mx-2">
      <div className="card-body ">
        <Link to={"single_post/" + props.id}>
          <div className="row">
            <h5 className="mt-3 col-6">{props.author}</h5>
          </div>
        </Link>
        <p className="card-text">{props.title}</p>
        <p className="card-text">{props.body}</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.deletePost(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
