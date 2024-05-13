import React from 'react'
import styles from "./Emoji.module.css";

export default function Emoji({emoji}) {
  return (
    <div>
      <div className={styles.symbol}>{emoji.symbol}</div>
      <div>{emoji.title}</div>
    </div>
  );
}
