import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		rollTotal: state.rollTotal,
	};
};

const RollOutput = ({ rollTotal }) => {
	return (
		<>
			<div id="rollOutputWindow" align="center" className="col">
				{rollTotal}
			</div>
		</>
	);
};

const RollOutputWindow = connect(mapStateToProps)(RollOutput);
export default RollOutputWindow;
