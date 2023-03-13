import React from "react";

export default function PostDetail({ post }) {
  return (
    <>
      <div className="container">
        <h1 style={{ color: 'green' }}>
          {post.id}. {`${post.title}`.toUpperCase()}
        </h1>
        <p>{post.body}</p>
      </div>

    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      params: {
        postid: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postid}`
  );

  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
