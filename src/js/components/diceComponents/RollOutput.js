import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		rollTotal: state.rollTotal,
	};
};


const RollOutput = ({rollTotal}) => {
	return(
	<>
		<div>
			{rollTotal} <br />
			ROLL WINDOW GOES HERE
		</div>
	</>
	)}
// class RollOutput extends Component {
// 	constructor(props) {
// 		super(props);
// 		console.log(props)
// 		this.state = {
// 			rollTotal: props.rollTotal
// 		}
// 		// this.rollTotal = props.rollTotal
// 	}

// 	render() {
// 		const result = this.rollTotal;
// 		return (
// 			<>
// 				<div>
// 					{result} <br />
// 					ROLL WINDOW GOES HERE
// 				</div>
// 			</>
// 		);
// 	}
// }

const RollOutputWindow = connect(mapStateToProps)(RollOutput);
export default RollOutputWindow;
