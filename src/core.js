/**
 * Created by Klinek on 14.04.2018.
 */
import {List, Map,fromJS} from 'immutable'
import {validateEvent} from './validator'

export const INITIAL_STATE = fromJS({events:[]});

export function setEvents(state, events) {
    events = events.map(event=>Map(event));
    return state.set('events', List(events));
}

export function addEvent(state,event){
    return state.update('events',events => events.push(Map(event)));
}

/*mongodb addEvent*/
export const mongoMiddleware = db => store => next => action => {
    if(action.meta && action.meta.remote){

        let validation = validateEvent(action.event);
        if(!validation.valid){
            console.log(action.meta.socketId);
            /*TODO improve and send error msg just to specific socket.io client by ID*/
            return;
        }

        db.collection("events").insertOne(action.event,(err,response)=>{
            if(err) throw err;
            let event = response.ops[0];
            store.dispatch({
                type:"ADD_EVENT",
                event
            })
        });
        return;
    }
    return next(action);
};

