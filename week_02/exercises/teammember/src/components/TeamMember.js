import React from "react";
import styles from "./TeamMember.module.css";
export default function TeamMember({
  firstName,
  lastName,
  func,
  mail,
  phoneNumber,
}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {firstName} {lastName}
      </h2>
      <p className={styles.function}>{func}</p>
      <div className={styles.otherInfo}>
        <p>{mail}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}
