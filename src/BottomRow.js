/* jshint esversion: 6 */

import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

const [down, setDown] = useState(0);
const [quarter, setQuarter] = useState(0);
const [ballOn, setBallOn] = useState(0);
const [toGo, setToGo] = useState(0);

const addDown = event => {
  setDown(down + 1);
  if(down >= 4){
    setDown(0);
  }

};

const addQuarter = event => {
  setQuarter(quarter + 1);
  if (quarter >= 4){
    setQuarter(0);
  }
};


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 onClick = {addDown} className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 onClick = {addQuarter} className="quarter__title">Quarter</h3>
        <div  className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
