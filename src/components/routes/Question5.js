import React, { useState } from "react";
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
 

  return (
    <div>
      <div>
        <h1 className="TitleText">{t("title.5")}</h1>
      </div>
      <div>
        <text className="wa">
        {t("question.62")}
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
        {t("question.63")}
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
        {t("question.64")}
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
        {t("question.65")}
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
        {t("question.66")}
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
        {t("question.67")}
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
        {t("question.68")}
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
        {t("question.69")}
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
        {t("question.70")}
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
        {t("question.71")}
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
        {t("question.72")}
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
        {t("question.73")}
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
        {t("question.74")}
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
        {t("question.75")}
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
        {t("question.76")}
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
      <Link to='/Question6'>
          <button className="Button" />
        </Link>
      </div>
    </div>
  );
}

export default Question;
