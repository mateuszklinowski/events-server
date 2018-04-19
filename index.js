/**
 * Created by Klinek on 15.04.2018.
 */
import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

store.dispatch({
    type: 'SET_EVENTS',
    events: require('./events.json')
});
store.dispatch({type: 'ADD_EVENT',
    event:{
        id:3,
        name:'flanki',
        firstName:'Bolek',
        lastName:'Magda',
        email:'bolek@magda.pl'
}});