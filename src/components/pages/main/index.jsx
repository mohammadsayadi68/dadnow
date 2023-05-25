import React from "react";
import NewNews from "./new-news.jsx";
import Dadpro from "./dadpro.jsx";
import Media from "./multy-media.jsx";
import Team from "./team.jsx";
import Mail from "./mail.jsx";
import Actions from "./actions.jsx";

const index = () => {
  return (
    <div>
      <NewNews />
      <Actions /> 
      <Dadpro />
      <Media />
      <Team />
      <Mail />
    </div>
  );
};
export default index;
