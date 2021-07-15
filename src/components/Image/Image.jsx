import React, { useState } from "react";
import styles from "./Image.module.css";
import Translate from '@docusaurus/Translate';

export const IfcImage = (props) => {
  return (
    <div className={styles.ifcImage}>
      {props.image}
      <a target="_blank" href={props.ifcLink}> <i>
          <Translate description="The source of an image of the blog">
              Source
          </Translate>
      </i> </a>
    </div>
  );
};
