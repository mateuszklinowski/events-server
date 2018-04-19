/**
 * Created by Klinek on 14.04.2018.
 */
import {List, Map} from 'immutable'

export const INITIAL_STATE = Map();

export function setEvents(state, events) {
    events = events.map(event=>Map(event));
    return state.set('events', List(events));
}

export function addEvent(state,event){
    return state.update('events',events => events.push(event));
}

