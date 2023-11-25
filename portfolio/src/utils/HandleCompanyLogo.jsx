import React from "react";
import Github from "../assets/Logos/Github.jsx";

const HandleCompanyLogo = (company) => {

  if (company === "Peduly") return <Github />;
  return console.error(`Error can't found logo's of ${company}`);
};

export default HandleCompanyLogo;