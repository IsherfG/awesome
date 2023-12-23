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
      <div className="ThankYouMessage">
        <h2>{t("Thank you for answering the questions")}</h2>
      </div>
    </div>
  );
}

export default Home;