import {
	ROLL_DICE,
	LOG_ROLL,
	TOGGLE_BAG,
	ADV_ROLL,
	WRITE_RESULT_ARRAY,
} from '../constants/action-types';

export function rollDice(payload) {
	return { type: ROLL_DICE, payload };
}

export function logRollResult(payload) {
	return { type: LOG_ROLL, payload };
}

export function toggleBag(payload) {
	return { type: TOGGLE_BAG, payload };
}

export function rollWithAdvantage(payload) {
	return { type: ADV_ROLL, payload };
}

export function writeResultArray(payload) {
	return { type: WRITE_RESULT_ARRAY, payload };
}
