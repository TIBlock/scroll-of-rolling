import store from '../js/store/index';
import { addArticle, rollDice, rollWithAdvantage } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;
window.rollDice = rollDice;
window.rollWithAdvantage = rollWithAdvantage

store.subscribe(() => console.log('Look ma, Redux!!'));
