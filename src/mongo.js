import serverConfig from '../server.config';
import mongodb from 'mongodb';

const conn = ()=>{
    let userPass="";
    if(serverConfig.mongodb.username && serverConfig.mongodb.password){
        userPass = serverConfig.mongodb.username+":"+serverConfig.mongodb.password+"@";
    }
    let databaseName = "";
    if(serverConfig.mongodb.database){
        databaseName = "/"+serverConfig.mongodb.database;
    }

    return "mongodb://"+userPass+serverConfig.mongodb.host+":"+serverConfig.mongodb.port+databaseName;
};
export const connString = conn();
export const MongoClient = mongodb.MongoClient;


