/**
 * Created by Klinek on 15.04.2018.
 */
import Server from 'socket.io';
import express from 'express';
import bodyParser from 'body-parser';


export default function startServers(store) {

    //Express setup
    let app = express();
    let server = app.listen(8080,()=>{
        console.log('Listening on  port 8080')
    });

    app.use(bodyParser.urlencoded({extender:true}));

    app.get('/',(request,response)=>{
        response.send(store.getState().toJS());
        //response.sendFile(__dirname +'/index.html')
    });

    app.post('/add',(req,res)=>{
        console.log(req.body);
        store.dispatch(res.body);
    });

    //Socket.io setup
    const io = new Server(server);
    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );
    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}