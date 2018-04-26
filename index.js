/**
 * Created by Klinek on 15.04.2018.
 */
import makeStore from './src/store';
import startServers from './src/server';

export const store = makeStore();
startServers(store);

store.dispatch({
    type:'SET_STATE',
    state:{
        events:[
            {
                id:0,
                name:'eventName',
                firstName:'Ola',
                lastName:'nowak',
                email:'ela@owa.pl',
                date:1525039200000
            },
            {
                id:1,
                name:'eventName',
                firstName:'Ola',
                lastName:'nowak',
                email:'ela@owa.pl',
                date:1525039200000
            }],
        messages:[],
        form:{
            name:'',
            firstName:'',
            lastName:'',
            email:'',
            date:''
        }
    }
});
