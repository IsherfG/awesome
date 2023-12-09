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
      <div className="Inputs">
        <div className="Input">
          <label>{t("Name")}</label>
          <input className="in" type="text" placeholder={t("Enter your name")} />
        </div>
        <div className="Input">
          <label>{t("Email")}</label>
          <input className="in" type="email" placeholder={t("Enter your email")} />
        </div>
        <div className="Input">
          <label>{t("Gender")}</label>
          <select className="in">
            <option value="male">{t("Male")}</option>
            <option value="female">{t("Female")}</option>
          </select>
        </div>
        <div className="Input">
          <label>{t("Phone Number")}</label>
          <input className="in" type="tel" placeholder={t("Enter your phone number")} />
        </div>
      </div>
      <Link to="/Question1">
        <button className="Button">{t("Next")}</button>
      </Link>
    </div>
  );
}

export default Home;