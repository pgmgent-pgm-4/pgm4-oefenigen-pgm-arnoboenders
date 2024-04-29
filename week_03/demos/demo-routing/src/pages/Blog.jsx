import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {ROUTES} from "../routes/routes";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link to={`${ROUTES.blog.path}/${post.id}`} key={`post-${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
