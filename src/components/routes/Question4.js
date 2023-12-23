import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import "../styles/global.css";


function Question() {


  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

 const [data1, setData1] = useState(0); 
 const [data2, setData2] = useState(0); 
 const [data3, setData3] = useState(0); 
 const [data4, setData4] = useState(0); 
 const [data5, setData5] = useState(0); 
 const [data6, setData6] = useState(0); 
 const [data7, setData7] = useState(0); 
 const [data8, setData8] = useState(0); 
 const [data9, setData9] = useState(0); 
 const [data10, setData10] = useState(0); 
 const [data11, setData11] = useState(0); 
 const [data12, setData12] = useState(0); 
 const [data13, setData13] = useState(0); 
 const [data14, setData14] = useState(0); 
 const [data15, setData15] = useState(0); 
 
 useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="index_containerQ">
      <div>
        <h1 className="TitleText">{t("title.4")}</h1>
      </div>
      <div>
        <text className="wa">
        {t("question.47")}
        </text>
        <h1>{data1}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData1(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.48")}
        </text>
        <h1>{data2}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData2(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.49")}
        </text>
        <h1>{data3}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData3(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.50")}
        </text>
        <h1>{data4}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData4(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.51")}
        </text>
        <h1>{data5}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData5(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.52")}
        </text>
        <h1>{data6}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData6(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.53")}
        </text>
        <h1>{data7}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData7(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.54")}
        </text>
        <h1>{data8}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData8(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.55")}
        </text>
        <h1>{data9}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData9(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.56")}
        </text>
        <h1>{data10}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData10(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.57")}
        </text>
        <h1>{data11}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData11(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.58")}
        </text>
        <h1>{data12}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData12(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.59")}
        </text>
        <h1>{data13}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData13(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.60")}
        </text>
        <h1>{data14}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData14(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
        <text>
        {t("question.61")}
        </text>
        <h1>{data15}</h1>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setData15(e.target.value)}
          defaultValue={0}
          step={0.25}
          className="slide"
        />
      </div>
      <div>
      <Link to='/Question5' className="ButtonLink">
        <button className="Button">
          <p1 className = "NEXT">Next</p1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Question;
