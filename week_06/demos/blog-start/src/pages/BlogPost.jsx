import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_POST_BY_SLUG } from "../graphql/queries";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });
  if (loading) return <>...loading</>;
  if (error) return <>...error</>;

  return (
    <div>
		  <Helmet>
			  <title> AwesomeBlog | {data.post.title}</title>
			  <meta name="description" content="blogpost..." />
	  </Helmet>
      <h1>{data.post.title}</h1>
      <div>{parse(data.post.content.html)}</div>
    </div>
  );
}
