import React, { useState } from "react";

export default function comments() {
  const [comment, setComment] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComment(data);
  };

  return (
    <div>
      <button onClick={fetchComments}>Load Comments</button>
      {comment.map((c) => {
        return (
          <div key={c.id}>
            {c.id} {c.text}
          </div>
        );
      })}
    </div>
  );
}
