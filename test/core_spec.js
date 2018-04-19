import {List, Map} from 'immutable';
import {expect} from 'chai';



import {setEvents} from '../src/core';

describe('application logic', () => {

    describe('setEvents', () => {

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

        it('adds the events to the state', () => {
            const state = Map();
            const events = List.of(Map(testEvent1),Map(testEvent2));
            const nextState = setEvents(state, events);
            expect(nextState).to.equal(Map({
                events: List.of(Map(testEvent1),Map(testEvent2))
            }));
        });

        it('converts to immutable', () => {
            const state = Map();
            const events = [testEvent1, testEvent2];
            const nextState = setEvents(state, events);
            expect(nextState).to.equal(Map({
                events: List.of(Map(testEvent1), Map(testEvent2))
            }));
        });

    });


});