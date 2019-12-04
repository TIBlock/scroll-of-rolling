import store from '../js/store/index';
import { addArticle, rollDice } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;
window.addArticle = rollDice;


store.subscribe(() => console.log('Look ma, Redux!!'));
