import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability',()=>{

   describe('a number',()=>{
       function increment(currentState) {
           return currentState + 1;
       }
       it('is immutable',()=>{
           let state = 10;
           let nextState = increment(state);

           expect(nextState).to.equal(11);
           expect(state).to.equal(10);
       })
   });

   describe('A list', ()=>{
        function addEvent(currentState,event){
            return currentState.push(event);
        }

        it('is immutable', ()=>{
            let state = List.of('Flanki','Mecz');
            let nextState = addEvent(state,'Spacer');

            expect(nextState).to.equal(List.of('Flanki','Mecz','Spacer'));
            expect(state).to.equal(List.of('Flanki','Mecz'));

        })

    });

    describe('a tree', () => {

        function addMovie(currentState, movie) {
            return currentState.update('movies',movies => movies.push(movie))
            /*
             SAME CODE
             return currentState.set(
             'movies',
             currentState.get('movies').push(movie)
             );
             */
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });
    });
});