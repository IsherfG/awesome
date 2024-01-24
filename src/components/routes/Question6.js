import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/global.css";

function Question2() {
  const { t } = useTranslation();
  const [data, setData] = useState(Array.from({ length: 15 }, () => 0));

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="index_containerQ">
      <div>
        <h1 className="TitleText">{t("title.6")}</h1>
      </div>
      {data.map((value, index) => (
        <div key={index}>
          <text>{t(`question.${index + 77}`)}</text>
          <h1>{value}</h1>
          <input
            type="range"
            min={0}
            max={5}
            onChange={(e) => {
              const newData = [...data];
              newData[index] = e.target.value;
              setData(newData);
            }}
            defaultValue={0}
            step={0.25}
            className="slide"
          />
        </div>
      ))}
      <div>
        <Link to="/Question3" className="ButtonLink">
          <button className="Button">
            <p1 className="NEXT">Next</p1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Question2;
