/**
 * Created by Klinek on 15.04.2018.
 */
import Server from 'socket.io';

export default function startServers(store,db) {

    db.collection("test").find({}).toArray((err,response)=>{
        if(err) throw err;
        console.log(response);
    });

    db.listCollections().toArray(function(err, collInfos) {
        console.log(collInfos);
    });

    const io = new Server().attach(8090);
    store.subscribe(
        () => {
            io.emit('state', store.getState().toJS());
        }
    );
    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}