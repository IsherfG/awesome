import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";
import i18n from "../localization/i18n";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="Container">
      {" "}
      <div className="Inputs">
        {" "}
        <div className="Input">
          {" "}
          <input className="in" type="text" />{" "}
        </div>{" "}
        <div className="Input">
          {" "}
          <input className="in" type="text" />{" "}
        </div>{" "}
        <div className="Input">
          {" "}
          <input className="in" type="text" />{" "}
        </div>{" "}
        <div className="Input">
          {" "}
          <input className="in" type="text" />{" "}
        </div>{" "}
      </div>{" "}
      <Link to="/Question1">
        {" "}
        <button className="Button" />{" "}
      </Link>{" "}
    </div>
  );
}

export default Home;
