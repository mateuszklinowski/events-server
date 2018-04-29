import {expect} from 'chai';
import {MongoClient,connString} from './../src/mongo';

describe('mongo', function() {
    it('mongoDB connection', (done)=> {
        MongoClient.connect(connString,(err,database)=>{
            if(err){
                throw err;
            }
            database.close();
            done();
        });
    });
});