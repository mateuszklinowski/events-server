import {setEvents, addEvent, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_STATE':
            return state.merge(action.state);

        case 'SET_EVENTS':
            return setEvents(state, action.events);

        case 'ADD_EVENT':
            return addEvent(state,action.event);
    }
    return state;
}