import React from "react";
import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <div>
      <h1> Students </h1>
      <Outlet />
    </div>
  );
}
