import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <ContactMailIcon />,
    link: "/contact",
  },
];
