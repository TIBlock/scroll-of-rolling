import React, { Component } from 'react';
import StandardDice from '../diceComponents/StandardDice';
import { connect } from 'react-redux';
import { toggleBag } from '../../actions/index';
import RollOutputWindow from '../diceComponents/RollOutput';
import DiceSets from '../diceComponents/DiceSets';

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

  render() {
    window.clickOpenBag = this.clickOpenBag;
    const openButtonStyle = {
      fontSize: 30,
      cursor: 'pointer',
    };

    let bg = require('../../../canvas.jpg');

    return (
      <>
        <div
          style={{ backgroundImage: 'url(' + bg + ')' }}
          id="mySidenav"
          className={'bag  container ' + this.props.bagCSS}
        >
          <div className="bagButton" onClick={this.clickOpenBag}>
            &times;
          </div>
          <div className="container">
            <div id="dice-container" className="row">
              <RollOutputWindow />
              <StandardDice />
              <DiceSets />
            </div>
          </div>
        </div>
        <span
          className="bagButton"
          style={openButtonStyle}
          onClick={this.clickOpenBag}
        >
          &#9776; Dice Bag
        </span>
      </>
    );
  }
}

const DiceBag = connect(mapStateToProps, mapDispatchToProps)(DiceBagMenu);
export default DiceBag;
