import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

export class Post extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return null;
	}
}

export default connect(null, { getData })(Post);
