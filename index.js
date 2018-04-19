/**
 * Created by Klinek on 15.04.2018.
 */
import makeStore from './src/store';
import startServers from './src/server';

export const store = makeStore();
startServers(store);

store.dispatch({
    type: 'SET_EVENTS',
    events: require('./events.json')
});
store.dispatch({type: 'ADD_EVENT',
    event:{
        name:'flanki',
        firstName:'Bolek',
        lastName:'Magda',
        email:'bolek@magda.pl'
}});
