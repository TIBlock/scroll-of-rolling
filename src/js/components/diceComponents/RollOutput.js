import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		rollTotal: state.rollTotal,
	};
};


const RollOutput = ({rollTotal}) => {
	return(
	<>
		<div id="rollOutputWindow" className="col">
			{rollTotal} <br />
			ROLL WINDOW GOES HERE
		</div>
	</>
	)}


const RollOutputWindow = connect(mapStateToProps)(RollOutput);
export default RollOutputWindow;
