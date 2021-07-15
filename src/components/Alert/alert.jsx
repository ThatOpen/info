import React from "react";
import styles from "./alert.module.css";

export const IfcAlert = (props) => (
    <div
        className="alert alert--primary"
        role="alert"
        style={{margin: "2rem"}}
    >
        <h2 className={styles.icon}>💡</h2>
        <div style={{marginBottom: "2rem"}}>
        </div>
        {props.children}
    </div>
);
