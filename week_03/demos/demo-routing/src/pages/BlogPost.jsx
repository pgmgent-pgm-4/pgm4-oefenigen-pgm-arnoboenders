import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <div>{post.tags?.join(" - ")}</div>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}
