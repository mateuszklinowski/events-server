/**
 * Created by Klinek on 15.04.2018.
 */
import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().attach(8090);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        console.log('connection');
        socket.emit('state', store.getState().toJS());

        socket.on('action', store.dispatch.bind(store));
    });
}