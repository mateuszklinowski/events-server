/**
 * Created by Klinek on 15.04.2018.
 */
import Server from 'socket.io';

export default function startServers(store,db) {
    console.log('db created');
    db.collection("events").find({}).toArray((err,result)=>{
        if (err) throw err;
        store.dispatch({
            type:'SET_STATE',
            state:{
                events:result
            }
        });
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