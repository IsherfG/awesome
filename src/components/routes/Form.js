import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";
import i18n from "../localization/i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

function Home() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="container">
      <div className="Flag">
        {" "}
        <Link to="/Home">
          <Flag
            country="US"
            role="button"
            size={100}
            onClick={() => changeLanguage("en")}
          />
        </Link>
      </div>
      <div className="Flag">
        {" "}
        <Link to="/Home">
          <Flag
            country="NL"
            role="button"
            size={100}
            onClick={() => changeLanguage("nl")}
          />
        </Link>
      </div>
      {/* Add more buttons for other languages if needed */}
    </div>
  );
}

export default Home;
