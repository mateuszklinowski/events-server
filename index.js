/**
 * Created by Klinek on 15.04.2018.
 */
import makeStore from './src/store';
import startServers from './src/server';

import {MongoClient,connString} from './src/mongo';

MongoClient.connect(connString,(err,database)=>{
    if(err){
        throw err;
    }
    let db = database.db("eventsDB");
    const store = makeStore(db);
    startServers(store,db);
});

