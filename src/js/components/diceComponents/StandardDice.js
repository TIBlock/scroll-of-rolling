import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { rollDice, logRollResult, writeResultArray } from '../../actions/index';

function mapDispatchToProps(dispatch) {
	return {
		rollTotal: result => dispatch(rollDice(result)),
		logRollResult: result => dispatch(logRollResult(result)),
		resultArray: result => dispatch(writeResultArray(result)),
	};
}

const mapStateToProps = state => {
	return {
		dice: state.standardDice,
		rollTotal: state.rollTotal,
		rollLog: state.rollLog,
		resultArray: state.resultArray,
	};
};
class MapStandardDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: props.dice,
			rollTotal: props.rollTotal,
			rollLog: props.rollLog,
			resultArray: props.resultArray,
		};

		this.roll = this.roll.bind(this);
	}
	roll(sides) {
		let rollTotal = Math.floor(Math.random() * sides) + 1;
		let timeStamp = moment().format();
		let resultArray = []
		// console.log(this.props)
		this.props.resultArray({resultArray})
		this.props.rollTotal({ rollTotal });
		this.props.logRollResult({ rollTotal, timeStamp });
	}
	render() {
		const { dice } = this.state;
		return (
			<div id="standard-dice" className="col" align="center">
				{dice.map((el, index) => (
					<button
						id="dice-button"
						key={index}
						onClick={() => this.roll(el.sides)}
					>
						{el.id} Dice
					</button>
				))}
			</div>
		);
	}
}

const StandardDice = connect(
	mapStateToProps,
	mapDispatchToProps
)(MapStandardDice);
export default StandardDice;
