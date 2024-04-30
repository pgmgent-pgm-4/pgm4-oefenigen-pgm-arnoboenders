import { List, ListItem } from "@mui/material";
import React from "react";

// icons
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const info = {
    email: {
      name: "email",
      address: "arnoboenders@gmail.com",
    },
    github: {
      name: "Github",
      address: "https://github.com/Arno-Boenders",
    },
    linkedin: {
      name: "LinkedIn",
      address: "https://www.linkedin.com/in/arno-boenders-816117228/",
    },
  };
  return (
    <List>
      <ListItem>
        <AlternateEmailRoundedIcon />
        {info.email.name}: {info.email.address}
      </ListItem>
      <ListItem>
        <GitHubIcon />
        {info.github.name}:
        <a href={info.github.address}>{info.github.address}</a>
      </ListItem>
      <ListItem>
        <LinkedInIcon />
        {info.linkedin.name}:
        <a href={info.linkedin.address}>{info.linkedin.address}</a>
      </ListItem>
    </List>
  );
}
