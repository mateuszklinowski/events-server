import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';



import {setEvents, addEvent} from '../src/core';

describe('application logic', () => {

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

    describe('setEvents', () => {

        it('set state to the events', () => {
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

    describe('addEvent', () => {

        it('adds events to the state', () => {
            const state = fromJS({events:[testEvent1]});

            const nextState = addEvent(state, testEvent2);
            expect(nextState).to.equal(fromJS({events:[testEvent1,testEvent2]}));
        });


    });


});