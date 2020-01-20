import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  rollWithAdvantage,
  logRollResult,
  writeResultArray,
} from '../../actions/actionsIndex';

function mapDispatchToProps(dispatch) {
  return {
    rollTotal: result => dispatch(rollWithAdvantage(result)),
    logRollResult: result => dispatch(logRollResult(result)),
    resultArray: result => dispatch(writeResultArray(result)),
  };
}

const mapStateToProps = state => {
  return {
    standardDice: state.standardDice,
    diceSets: state.diceSets,
    rollTotal: state.rollTotal,
    rollLog: state.rollLog,
  };
};

class Dice {
  constructor(sides) {
    console.log('The dice is being constructed!');
    this.sides = sides;
  }
  roll() {
    var result = Math.floor(Math.random() * this.sides) + 1;
    return result;
  }
}

class MapDiceSets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardDice: props.standardDice,
      diceSets: props.diceSets,
      rollTotal: props.rollTotal,
      rollLog: props.rollLog,
    };
    this.rollWithAdvantage = this.rollWithAdvantage.bind(this);
  }
  rollWithAdvantage(diceSets) {
    let resultArray = [];
    let advRollTotal = () => {
      let d20Dice1 = new Dice(20);
      let d20Dice2 = new Dice(20);

      resultArray.push(d20Dice1.roll(), d20Dice2.roll());
      return Math.max(...resultArray);
    };

    let rollTotal = advRollTotal();
    let timeStamp = moment().format();
    this.props.resultArray({ resultArray });
    this.props.rollTotal({ rollTotal });
    this.props.logRollResult({ rollTotal, timeStamp });
  }

  rollWithDisAdvantage(diceSets) {
    function disRollTotal() {
      let firstRoll = Math.floor(Math.random() * 20) + 1;
      let secondRoll = Math.floor(Math.random() * 20) + 1;
      let result = '';
      if (firstRoll < secondRoll) {
        console.log('the first roll was lower: ', firstRoll);
        result = firstRoll;
      } else {
        console.log('the second roll was lower: ', secondRoll);
        result = secondRoll;
      }
      return result;
    }
    let rollTotal = disRollTotal();
    let timeStamp = moment().format();
    this.props.rollTotal({ rollTotal });
    this.props.logRollResult({ rollTotal, timeStamp });
  }

  render() {
    const { diceSets } = this.state;
    // console.log(this.state)
    return (
      <div className="col" align="center">
        {diceSets.map((el, index) => (
          <button
            id="dice-button"
            key={index}
            onClick={() => this.rollWithAdvantage()}
          >
            {el.name} Dice
          </button>
        ))}
      </div>
    );
  }
}

const DiceSets = connect(mapStateToProps, mapDispatchToProps)(MapDiceSets);
export default DiceSets;
