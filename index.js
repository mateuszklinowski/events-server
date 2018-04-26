/**
 * Created by Klinek on 15.04.2018.
 */
import makeStore from './src/store';
import startServers from './src/server';
import mongoConfig from './mongodb.config';

import {MongoClient,connString} from './src/mongo';
const store = makeStore();

MongoClient.connect(connString,(err,database)=>{
    if(err){
        throw err;
    }

    let eventsDb = database.db(mongoConfig.dbName);
    startServers(store,eventsDb);
});

