import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    rollTotal: state.rollTotal,
    resultArray: state.resultArray,
  };
};

const RollOutput = ({ rollTotal, resultArray }) => {
  let diceRolls = resultArray.join().replace(',', ' & ');

  return (
    <>
      <div id="all-dice-rolled" align="center" className="col">
        {diceRolls}
      </div>
      <div id="rollOutputWindow" align="center" className="col">
        {rollTotal}
      </div>
    </>
  );
};

const RollOutputWindow = connect(mapStateToProps)(RollOutput);
export default RollOutputWindow;
