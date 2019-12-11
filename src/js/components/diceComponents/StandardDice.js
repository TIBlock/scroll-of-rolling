import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rollDice } from '../../actions/index'


function mapDispatchToProps(dispatch) {
	return {
		rollTotal: result => dispatch(rollDice(result)),
	};
}

const mapStateToProps = state => {
	return { 
		dice: state.standardDice,
		rollTotal: state.rollTotal
	};
};


class MapStandardDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: props.dice,
			rollTotal: props.rollTotal
		};

		this.roll = this.roll.bind(this);
	}
	roll(sides) {
		let rollTotal = Math.floor(Math.random() * sides) + 1;
		this.props.rollTotal({rollTotal})
	}
	render() {
		const { dice } = this.state;
		return (
			<div className="col" align="center">
				{dice.map((el, index) => (
					<button key={index} onClick={() => this.roll(el.sides)}>
						{el.id} Dice
					</button>
				))}
			</div>
		);
	}
}

const StandardDice = connect(mapStateToProps, mapDispatchToProps)(MapStandardDice);
export default StandardDice;
