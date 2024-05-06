import React from "react";

export default function Student({ student }) {
  return (
    <div>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <img src={student.picture.large} alt="profile" />
    </div>
  );
}
