import React, { Component } from 'react';
import { connect } from 'react-redux';
const mapStateToProps = state => {
	return { dice: state.standardDice };
};

//TODO: ADD INDEX TO DICE

class MapStandardDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: props.dice,
		};
		this.roll = this.roll.bind(this);
	}
	roll(sides) {
		let randomNumber = Math.floor(Math.random() * sides) + 1;
		return randomNumber;
	}
	render() {
		const { dice } = this.state;
		return (
			<div>
				{dice.map(el => (
					<button key={el.id} onClick={() => this.roll(el.sides)}>{el.id} Dice</button>
				))}
			</div>
		);
	}
}

//TODO: MAKE SEPARATE COMPONENT FOR SLIDING MENU

const StandardDice = connect(mapStateToProps)(MapStandardDice);
export default StandardDice;
