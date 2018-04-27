/**
 * Created by Klinek on 14.04.2018.
 */
import {MongoClient,connString} from './../src/mongo';
import {List, Map,fromJS} from 'immutable'

export const INITIAL_STATE = fromJS({events:[]});

export function setEvents(state, events) {
    events = events.map(event=>Map(event));
    return state.set('events', List(events));
}
export function addEvent(state,event){
    return state.update('events',events => events.push(event));
}

export function addEventToDb(state,event){
    MongoClient.connect(connString,(err,database)=>{
        if(err){
            throw err;
        }
        let db = database.db("eventsDB");

        /*TODO its not store*/
        db.collection("events").insertOne(event,(err,response)=>{
            if(err) throw err;
            console.log('insert response:');
            console.log(response);
            event._id = response.insertedId;
            state.dispatch({
                type:"ADD_EVENT",
                event:event,
                meta:{
                    db:true
                }
            })
        })
    });
    return state;
}
