import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";

function Home() {
  return (
    <div>
      <div className="Container">
        <div className="Inputs">
          <div className="Input">
            <input className="in" type='text' />
          </div>
          <div className="Input">
            <input className="in" type='text' />
          </div>
          <div className="Input">
            <input className="in" type='text' />
          </div>
          <div className="Input">
            <input className="in" type='text' />
          </div>
        </div>
        <Link to='/Question'>
          <button className="Button" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
