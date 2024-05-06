import React from "react";
import { ROUTES } from "../routes/routes";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.nav__link} to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      <NavLink className={styles.nav__link} to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
      <NavLink className={styles.nav__link} to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
      <NavLink className={styles.nav__link} to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
      <NavLink className={styles.nav__link} to={ROUTES.resume.path}>{ROUTES.resume.title}</NavLink>
    </div>
  );
}
