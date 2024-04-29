import React from "react";
import styles from "./TeamMember.module.css";
export default function TeamMember({
  firstName,
  lastName,
  func,
  mail,
  phoneNumber,
  image,
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div className={styles.innerCard}>
        <h2 className={styles.title}>
          {firstName} {lastName}
        </h2>
        <p className={styles.function}>{func}</p>
        <div className={styles.otherInfo}>
          <p>{mail}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
