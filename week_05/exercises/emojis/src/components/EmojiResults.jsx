import React from "react";
import styles from "./Emoji.module.css";
import Emoji from "./Emoji";
export default function EmojiResults({ emojis }) {
  return (
    <div className={styles.grid}>
      {emojis.map((emoji, i) => (
        <div key={`emoji-${i}`} className={styles.border}>
          <Emoji emoji={emoji} />
        </div>
      ))}
    </div>
  );
}
