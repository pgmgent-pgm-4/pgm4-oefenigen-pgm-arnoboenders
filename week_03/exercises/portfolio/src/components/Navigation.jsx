import React from 'react'
import {ROUTES} from "../routes/routes"
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
      <div>
          <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
          <NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
          <NavLink to={ROUTES.projects.path}>{ROUTES.projects.title}</NavLink>
          <NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
          <NavLink to={ROUTES.resume.path}>{ROUTES.resume.title}</NavLink>
      </div>
  )
}
