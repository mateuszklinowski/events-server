/**
 * Created by Klinek on 15.04.2018.
 */
import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
    return createStore(reducer);
}