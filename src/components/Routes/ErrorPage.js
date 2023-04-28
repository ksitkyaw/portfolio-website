import React from "react";

export default function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Opps Sorry</h1>
      <h4>There must be something wrong.</h4>
      <p>The page you are trying to access doesn't seem to exist</p>
    </div>
  );
}
