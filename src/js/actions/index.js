import {
	ADD_ARTICLE,
	DATA_LOADED,
	ROLL_DICE,
	LOG_ROLL,
	TOGGLE_BAG,
} from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

export function getData() {
	return function(dispatch) {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				dispatch({ type: DATA_LOADED, payload: json });
			});
	};
}

export function rollDice(payload) {
	return { type: ROLL_DICE, payload };
}

export function logRollResult(payload) {
	return { type: LOG_ROLL, payload };
}

export function toggleBag(payload) {
	return { type: TOGGLE_BAG, payload };
}
