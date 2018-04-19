/**
 * Created by Klinek on 15.04.2018.
 */

import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', ()=>{

    const testEvent1 = {
        "id":0,
        "name":"Spacer",
        "firstName":"Jan",
        "lastName":"Kowalski",
        "email":"jan@kowalski.pl"
    };
    const testEvent2 =  {
        "id":1,
        "name":"Mecz",
        "firstName":"Ola",
        "lastName":"Nowak",
        "email":"ola@nowak.pl"
    };

    it('handles SET_EVENTS', ()=>{
        const initialState = Map();
        const action = {type: 'SET_EVENTS', events: [testEvent1]};
        const nextState = reducer(initialState,action);

        expect(nextState).to.equal(fromJS({
            events: [testEvent1]
        }))
    });

    it('has an initial state', () => {
        const action = {type: 'SET_EVENTS', events: [testEvent1]};
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            events: [testEvent1]
        }));
    });

    it('can be used with reduce', () => {
        const actions = [
            {type: 'SET_EVENTS', events: [testEvent1, testEvent2]},
        ];
        const finalState = actions.reduce(reducer,undefined);

        expect(finalState).to.equal(fromJS({
            events: [testEvent1,testEvent2]
        }));
    });

});