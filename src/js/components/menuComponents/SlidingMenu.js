import React, { Component } from 'react';
import StandardDice from '../diceComponents/StandardDice';
import { connect } from 'react-redux';
import { toggleBag } from '../../actions/index';

function mapDispatchToProps(dispatch) {
	return {
		toggleBag: isBagOpen => dispatch(toggleBag(isBagOpen)),
	};
}

const mapStateToProps = state => {
    console.log(state.isBagOpen)
	return { isBagOpen: state.isBagOpen };
};

class DiceBagMenu extends Component {
	constructor(props) {
		super(props);
		this.clickOpenBag = this.clickOpenBag.bind(this);
	}
	clickOpenBag(event) {
        event.preventDefault();
        this.props.toggleBag({
            isBagOpen: !this.props.isBagOpen})
	}

	// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	// closeBag() {
	// 	document.getElementById('mySidenav').style.width = '0';
	// 	document.getElementById('main').style.marginLeft = '0';
	// }
	render() {
		return (
			<div id="mySidenav" className="sidenav">
				<div className="closebtn" onClick={this.clickOpenBag}>
					&times;
				</div>
				<StandardDice />
			</div>
		);
	}
}

const DiceBag = connect(mapStateToProps, mapDispatchToProps)(DiceBagMenu);
export default DiceBag;
