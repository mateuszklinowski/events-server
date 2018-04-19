import {Map, fromJS} from 'immutable';
import {expect} from 'chai';


import makeStore from '../src/store';

describe('store', () => {

    const testEvent1 = {
        "name":"Spacer",
        "firstName":"Jan",
        "lastName":"Kowalski",
        "email":"jan@kowalski.pl"
    };
    const testEvent2 =  {
        "name":"Mecz",
        "firstName":"Ola",
        "lastName":"Nowak",
        "email":"ola@nowak.pl"
    };

    it('is a Redux store configured with the correct reducer', () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());

        store.dispatch({
            type: 'SET_EVENTS',
            events: [Map(testEvent1),Map(testEvent2)]
        });

        expect(store.getState()).to.equal(fromJS({
            events: [testEvent1,testEvent2]
        }));
    });

});