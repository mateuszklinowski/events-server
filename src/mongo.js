import mongoConfig from './../mongodb.config';
import mongodb from 'mongodb';

const conn = ()=>{
    let userPass="";
    if(mongoConfig.username && mongoConfig.password){
        userPass = mongoConfig.username+":"+mongoConfig.password+"@";
    }
    return "mongodb://"+userPass+mongoConfig.host+":"+mongoConfig.port;
};
export const connString = conn();
export const MongoClient = mongodb.MongoClient;


