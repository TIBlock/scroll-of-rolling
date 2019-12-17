import store from '../js/store/index';
import { rollDice, rollWithAdvantage } from '../js/actions/index';

window.store = store;
window.rollDice = rollDice;
window.rollWithAdvantage = rollWithAdvantage;

store.subscribe(() => console.log('Look ma, Redux!!'));
