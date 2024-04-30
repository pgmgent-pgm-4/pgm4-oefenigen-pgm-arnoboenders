import React from "react";
import { ROUTES } from "../routes/routes";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navigation() {
  return (
    <div>
      <Button variant="outlined">
        <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      </Button>
      <Button variant="outlined">
        <NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
      </Button>
      <Button variant="outlined">
        <NavLink to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
      </Button>
      <Button variant="outlined">
        <NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
      </Button>
      <Button variant="outlined">
        <NavLink to={ROUTES.resume.path}>{ROUTES.resume.title}</NavLink>
      </Button>
    </div>
  );
}
