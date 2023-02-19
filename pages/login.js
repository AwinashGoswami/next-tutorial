import React, { useState } from "react";

export default function login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handler = () => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form method="POST">
        <input
          type={text}
          placeholder="username"
          name="username"
          onChange={handler}
        />
        <input
          type={password}
          placeholder="username"
          name="password"
          onChange={handler}
        />
        <button type="submit" value={"submit"} onClick={submit}>
          {" "}
          Log in{" "}
        </button>
      </form>
    </div>
  );
}
