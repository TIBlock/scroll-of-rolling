import React, {Component} from 'react';
import { connect } from 'react-redux';
import { rollDice } from '../actions/index';

function mapDispatchToProps(dispatch) {
	return {
		rollDice: sides => dispatch(rollDice(sides)),
	};
}


const mapStateToProps = state => {
	return { dice: state.standardDice };
  };


  class MapStandardDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dice: props.dice
        }
        this.roll = this.roll.bind(this)
    }
    roll(sides) {
		let randomNumber = Math.floor(Math.random() * sides) + 1;
		console.log('rolling a d' + {sides} + ' dice - result - ', randomNumber);
		return randomNumber;
    }
    render(){
        const {dice} = this.state
        console.log(this.state)
        return (
            	<div>
            		{dice.map(el => (
            			<button key={el.id} onClick={() => this.roll(el.sides)}>{el.id} Dice</button>
            		))}
            	</div>
            	)
    }
  }


//   const MapStandardDice = ({dice}) => {
// 	console.log(dice)
// 	return (
// 	<div>
// 		{dice.map(el => (
// 			<button key={el.id} onClick={rollDice(el.sides)}>{el.id} Dice</button>
// 		))}
// 	</div>
// 	)
// }

const StandardDice = connect(mapStateToProps, mapDispatchToProps)(MapStandardDice)
export default StandardDice