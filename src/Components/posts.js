import React, { useState, useEffect } from "react";
import { Subject } from "rxjs";
import Axios from "axios";
import Post from "./post";
import { useSelector } from "react-redux";
export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  // const deletePost = (id) => {
  //   Axios.delete("http://localhost:3000/posts/" + id);

  //   for (let i = 0; i < posts.length; i++) {
  //     if (posts[i].id === id) {
  //       posts.splice(i, 1);
  //     }
  //   }
  //   let newPosts = [...posts];
  //   setPosts(newPosts);
  // };

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          author={post.author}
          title={post.title}
          body={post.body}
          key={index}
        />
      ))}
    </div>
  );
}
