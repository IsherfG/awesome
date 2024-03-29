import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/global.css";

function Question() {
  const { t, i18n } = useTranslation();
  const initialData = Array.from({ length: 15 }, () => 0);
  const [data, setData] = useState(initialData);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {

 
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="index_containerQ">
      <div>
        <h1 className="TitleText">{t("title.1")}</h1>
      </div>
      {data.map((value, index) => (
        <div key={index}>
          <text>{t(`question.${index + 1}`)}</text>
          <h1>{value}</h1>
          <input
            type="range"
            min={0}
            max={5}
            onChange={(e) => {
              const newData = [...data];
              newData[index] = e.target.value;
              setData(newData);
              console.log("Initial Data:", data);
            }}
            defaultValue={0}
            step={0.25}
            className="slide"
          />
        </div>
      ))}
      <div>
        <Link to="/Question2" className="ButtonLink">
          <button className="Button">
            <p1 className="NEXT">Next</p1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Question;
