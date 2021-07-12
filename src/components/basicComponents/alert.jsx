import React from "react";

export const IfcAlert = (props) => (
  <div
    className="alert alert--primary"
    role="alert"
    style={{ margin: "2rem" }}
  >
    <h2>💡</h2>
    <div style={{ marginBottom: "2rem" }}>
    </div>
    {props.children}
  </div>
);
