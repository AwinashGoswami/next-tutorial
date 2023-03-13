import { comments } from "./../../../../data/comments";

export default function handler(req, res) {
  // GET Request
  if (req.method === "GET") {
    res.status(200).json(comments);
  }
  // POST Request
  else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json("New Comment Added", newComment);
  }
}

// POST Request
