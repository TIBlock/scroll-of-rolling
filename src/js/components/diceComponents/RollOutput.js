import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		rollTotal: '',
	};
};

class RollOutput extends Component {
	constructor(props) {
		super(props);
		this.rollTotal = '20';
	}
	render() {
		const result = this.rollTotal;
		return (
			<>
				<div>
					{result} <br />
					ROLL WINDOW GOES HERE
				</div>
			</>
		);
	}
}

const RollOutputWindow = connect(mapStateToProps)(RollOutput);
export default RollOutputWindow;
