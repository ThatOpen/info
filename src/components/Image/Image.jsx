import React, { useState } from "react";
import styles from "./Image.module.css";


export const IfcImage = (props) => {
  return (
    <div className={styles.ifcImage}>
      {props.image}
      <a target="_blank" href={props.ifcLink}> <i>Source</i> </a>
    </div>
  );
};
