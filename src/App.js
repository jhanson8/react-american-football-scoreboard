/* jshint esversion: 6 */

//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [value, setValue] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
const [awayValue, awaySetValue] = useState(0);

const addTouchdown = event => {
  //current count is the count variable
  setValue(value + 7);
};

const addFieldGoal = event => {
  setValue(value + 3);

};

const addTouchdownAway = event => {
  //current count is the count variable
  awaySetValue(awayValue + 7);
};

const addFieldGoalAway = event => {
  awaySetValue(awayValue + 3);

};
const reset = event => {
  awaySetValue(0);
  setValue(0);

};

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{value}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {addTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {addFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div>

        <button onClick = {reset} className="awayButtons__fieldGoal">Reset Score</button>


        </div>
        <div className="awayButtons">
          <button onClick = {addTouchdownAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {addFieldGoalAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>

      </section>
    </div>
  );
}

export default App;
