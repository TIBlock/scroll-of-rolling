import {
  TOGGLE_BAG,
  ROLL_DICE,
  LOG_ROLL,
  ADV_ROLL,
  WRITE_RESULT_ARRAY,
} from '../constants/action-types';

const initialState = {
  standardDice: [
    { id: 'd2', sides: 2, diceColor: null, textColor: null },
    { id: 'd4', sides: 4, diceColor: null, textColor: null },
    { id: 'd6', sides: 6, diceColor: null, textColor: null },
    { id: 'd8', sides: 8, diceColor: null, textColor: null },
    { id: 'd10', sides: 10, diceColor: null, textColor: null },
    { id: 'd12', sides: 12, diceColor: null, textColor: null },
    { id: 'd20', sides: 20, diceColor: null, textColor: null },
    { id: 'd100', sides: 100, diceColor: null, textColor: null },
  ],
  diceSets: [
    // {
    //   name: 'Adv. Roll',
    //   dice: {
    //     dice1: 'd20',
    //     dice2: 'd20',
    //   },
    // },
    // {
    // 	name: 'Dis. Roll',
    // 	dice: {
    // 		dice1: 'd20',
    // 		dice2: 'd20',
    // 	},
    // },
    // {
    // 	name: 'Stat Roll',
    // 	dice: {
    // 		dice1: 'd6',
    // 		dice2: 'd6',
    // 		dice3: 'd6',
    // 		dice4: 'd6',
    // 	},
    // },
  ],
  resultArray: [],
  customDice: [],
  isBagOpen: false,
  bagCSS: 'closedBag',
  rollTotal: '',
  rollLog: [],
  articles: [],
  remoteArticles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE_BAG) {
    return Object.assign({}, state, {
      isBagOpen: action.payload.isBagOpen,
      bagCSS: action.payload.bagCSS,
    });
  }

  if (action.type === ROLL_DICE) {
    return Object.assign({}, state, {
      rollTotal: action.payload.rollTotal,
    });
  }

  if (action.type === ADV_ROLL) {
    return Object.assign({}, state, {
      rollTotal: action.payload.rollTotal,
    });
  }

  if (action.type === LOG_ROLL) {
    return Object.assign({}, state, {
      rollLog: state.rollLog.concat(action.payload),
    });
  }

  if (action.type === WRITE_RESULT_ARRAY) {
    return Object.assign({}, state, {
      resultArray: action.payload.resultArray,
    });
  }

  return state;
}

export default rootReducer;
