import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

const initialState = {
	articles: [],
	remoteArticles: [],
	standardDice: [
		{id:"d2", sides: 2},
		{id:"d4", sides: 4},
		{id:"d6", sides: 6},
		{id:"d8", sides: 8},
		{id:"d10", sides: 10},
		{id:"d12", sides: 12},
		{id:"d20", sides: 20},
		{id:"d100", sides: 100},
	],
	customDice: [],
	rollHistory:[]
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

	// if (action.type === ROLL_DICE) {
	// 	return Object.assign({}, state, {
	// 		dice: "test"
	// 	})
	// }

	return state;
}


export default rootReducer;
