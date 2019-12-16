import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { logRollResult } from '../../actions/index';
import { dispatch } from '../../../../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/pairs';

// from mapDispatchToProps(dispatch) {
//     return {}
// }


const mapStateToProps = state => {
    return {
        standardDice: state.standardDice,
        diceSets: state.diceSets,
        rollLog: state.rollLog
    }
}

class MapDiceSets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standatdDice: props.standardDice,
            diceSets: props.diceSets,
            rollLog: props.rollLog
        }
    }
    rollWithAdvantage(diceSets) {
        const advantageRoll = diceSets[0].dice.foreach(element => {

        })
    }

    // rollDiceSet(diceSets) {
    //     diceSets.find
    // }

}




const DiceSets = connect(
	mapStateToProps,
	mapDispatchToProps
)(MapDiceSets);
export default DiceSets;