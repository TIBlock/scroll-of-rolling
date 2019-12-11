import React, { Component } from 'react';
import StandardDice from '../diceComponents/StandardDice';
import { connect } from 'react-redux';
import { toggleBag } from '../../actions/index';
import RollOutputWindow from '../diceComponents/RollOutput';

function mapDispatchToProps(dispatch) {
	return {
		toggleBag: isBagOpen => dispatch(toggleBag(isBagOpen)),
	};
}

const mapStateToProps = state => {
	return {
		isBagOpen: state.isBagOpen,
		bagCSS: state.bagCSS,
	};
};

class DiceBagMenu extends Component {
	constructor(props) {
		super(props);
		this.clickOpenBag = this.clickOpenBag.bind(this);
	}
	clickOpenBag(event) {
		event.preventDefault();
		let bagCSS = '';
		if (!this.props.isBagOpen) {
			console.log('the bag should be open now');
			bagCSS = 'openBag';
			this.props.toggleBag({
				isBagOpen: !this.props.isBagOpen,
				bagCSS: bagCSS,
			});
		} else {
			console.log('the bag should be closed now');
			bagCSS = 'closedBag';
			this.props.toggleBag({
				isBagOpen: !this.props.isBagOpen,
				bagCSS: bagCSS,
			});
		}
	}

	// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	// 	document.getElementById('mySidenav').style.width = '0';
	// 	document.getElementById('main').style.marginLeft = '0';

	render() {
		window.clickOpenBag = this.clickOpenBag;
		const openButtonStyle = {
			fontSize: 30,
			cursor: 'pointer',
		};

		return (
			<>
				<div id="mySidenav" className={"bag " + this.props.bagCSS}>
					<div className="bagButton" onClick={this.clickOpenBag}>
						&times;
					</div>
					<div className="container">
						<div id="dice-container" className="row">
						<RollOutputWindow />
						<StandardDice />
						</div>
					</div>
				</div>
				<span className="bagButton" style={openButtonStyle} onClick={this.clickOpenBag}>
					&#9776; Dice Bag
				</span>
			</>
		);
	}
}

const DiceBag = connect(mapStateToProps, mapDispatchToProps)(DiceBagMenu);
export default DiceBag;
