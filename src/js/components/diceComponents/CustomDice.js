import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rollDice } from '../../actions/index';

function mapDispatchToProps(dispatch) {
	return {
		rollDice: sides => dispatch(rollDice(sides)),
	};
}

const mapStateToProps = state => {
	return { 
		sides: state.sides,
		standardDice: state.standardDice
	 };
  };

class ConstructDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sides: props.sides,
		};
		this.roll = this.roll.bind(this);
		this.handleRoll = this.roll.bind(this)
	}
	
	roll() {
		const { sides } = this.state;
		let randomNumber = Math.floor(Math.random() * sides) + 1;
		console.log('rolling a d' + {sides} + ' dice - result - ', randomNumber);
		return randomNumber;
	}

	handleRoll(event) {
		event.preventDefault();
		const { sides } = this.state;
		this.props.roll(sides);
		this.setState({ sides: sides });
	}
	return ( {
		const { dice } = this.state;
		return (
			<div className="col" align="center">
				{dice.map((el, index) => (
					<button id="dice-button" key={index} onClick={() => this.roll(el.sides)}>
						{el.id} Dice
					</button>
				))}
			</div>
		);
	})
}

//dice class that is used to roll the different dice
// class dice {
// 	constructor(sides) {
// 		console.log('The dice is being constructed!');
// 		this.sides = sides;
// 	}
// 	roll() {
// 		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
// 		return randomNumber;
// 	}
// }


// //prints dice roll to the page

// function printNumber(number) {
	// 	var placeholder = document.getElementById('placeholder');
	// 	placeholder.innerHTML = number;
	// }
	// //d2 dice roll.
	
	// let d2Dice = new dice(2);
	
// //button for d2

// var d2Button = document.getElementById('d2Button');

// d2Button.onclick = function() {
// 	var result = d2Dice.roll();
// 	printNumber(result);
// };

// //d3 dice roll.

// let d3Dice = new dice(3);

// //button for d3

// var d3Button = document.getElementById('d3Button');

// d3Button.onclick = function() {
// 	var result = d3Dice.roll();
// 	printNumber(result);
// };

// //d4 dice roll.

// let d4Dice = new dice(4);

// //button for d4

// var d4Button = document.getElementById('d4Button');

// d4Button.onclick = function() {
// 	var result = d4Dice.roll();
// 	printNumber(result);
// };

// //d6 dice roll.

// let d6Dice = new dice(6);

// //button for d6

// var d6Button = document.getElementById('d6Button');

// d6Button.onclick = function() {
// 	var result = d6Dice.roll();
// 	printNumber(result);
// };

// //d8 dice roll.

// let d8Dice = new dice(8);

// //button for d8

// var d8Button = document.getElementById('d8Button');

// d8Button.onclick = function() {
// 	var result = d8Dice.roll();
// 	printNumber(result);
// };

// //d10 dice roll.

// let d10Dice = new dice(10);

// //button for d10

// var d10Button = document.getElementById('d10Button');

// d10Button.onclick = function() {
// 	var result = d10Dice.roll();
// 	printNumber(result);
// };

// //d12 dice roll.

// let d12Dice = new dice(12);

// //button for d12

// var d12Button = document.getElementById('d12Button');

// d12Button.onclick = function() {
// 	var result = d12Dice.roll();
// 	printNumber(result);
// };

// //d20 dice roll.

// let d20Dice = new dice(20);

// //button for d20

// var d20Button = document.getElementById('d20Button');

// d20Button.onclick = function() {
// 	var result = d20Dice.roll();
// 	printNumber(result);
// };

// //d100 dice roll.

// let d100Dice = new dice(100);

// //button for d100

// var d100Button = document.getElementById('d100Button');

// d100Button.onclick = function() {
// 	var result = d100Dice.roll();
// 	printNumber(result);
// };

//custom dice roller.
//could be used to assign random attacks to teammates etc..

// let customDice = new dice(diceInput);

// var customDice =
// {
//   sides: customDiceInput,
//   roll: function ()
//   {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }

// //button for custom dice.

// var custDiceButton = document.getElementById('custDiceButton');

// custDiceButton.onclick = function() {
//   var result = customDice.roll();
//   printNumber(result);
// };

const Dice = connect(mapStateToProps, mapDispatchToProps)(ConstructDice);
export default Dice;
