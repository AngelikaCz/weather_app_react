import React from "react";

import "./Footer.css";
import "./styles.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by Angelika Czerwińska and is open-sourced on
      <a
        href="https://github.com/AngelikaCz/react_weather_app"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        GitHub{" "}
      </a>
      and hosted on
      <a
        href="https://wonderful-faloodeh-00586e.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {" "}
        Netlify.
      </a>
    </footer>
  );
}
