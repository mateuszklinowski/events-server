/**
 * Created by Klinek on 15.04.2018.
 */
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {mongoMiddleware} from "./core";

export default function makeStore(db) {
    const createStoreWithMiddleware = applyMiddleware(
        mongoMiddleware(db)
    )(createStore);
    return createStoreWithMiddleware(reducer);
}