import React from "react";
import styles from "./Component1.module.css";

const Component1 = () => {
  return (
    <article className={styles.Component1}>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
};

export default Component1;
