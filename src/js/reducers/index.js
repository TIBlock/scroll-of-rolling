import { ADD_ARTICLE, DATA_LOADED, ROLL_DICE } from '../constants/action-types';

const initialState = {
	articles: [],
	remoteArticles: [],
	dice: []
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

	if (action.type === ROLL_DICE) {
		return Object.assign({}, state, {
			dice: "test"
		})
	}

	return state;
}


export default rootReducer;
