import {
	ADD_ARTICLE,
	DATA_LOADED,
	TOGGLE_BAG,
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
	customDice: [{ id: null, sides: null, diceColor: null, textColor: null }],
	diceSets: [],
	isBagOpen: false,
	rollHistory: [],
	articles: [],
	remoteArticles: [],
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload),
		});
	}

	if (action.type === DATA_LOADED) {
		return Object.assign({}, state, {
			remoteArticles: state.remoteArticles.concat(action.payload),
		});
	}

	if (action.type === TOGGLE_BAG) {
		console.log(action.payload.isBagOpen)
		return Object.assign({}, state, {
			isBagOpen: action.payload.isBagOpen,
		});
	}

	return state;
}

export default rootReducer;
