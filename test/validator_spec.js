import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {validateEvent as validate} from './../src/validator';


import makeStore from '../src/store';

describe('validation', () => {

    const correctEvent = {
        "name":"Spacer",
        "firstName":"Jan",
        "lastName":"Kowalski",
        "email":"jan@kowalski.pl",
        "date":1528036239278
    };
    const tooLongValue =  {
        "name":"test",
        "firstName":"Meczssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        "lastName":"Nowak",
        "email":"ola@nowak.pl",
        "date":1528036239278
    };
    const wrongEmail =  {
        "name":"Mecz",
        "firstName":"Ola",
        "lastName":"Nowak",
        "email":"olanowak.pl",
        "date":1528036239278
    };
    const invalidDate =  {
        "name":"Mecz",
        "firstName":"Ola",
        "lastName":"Nowak",
        "email":"ola@nowak.pl",
        "date":"15h5035563929"
    };
    const missingValue =  {
        "name":"Mecz",
        "firstName":"",
        "lastName":"Nowak",
        "email":"ola@nowak.pl",
        "date":1528036239278
    };
    const dateFromPast =  {
        "name":"Mecz",
        "firstName":"Ola",
        "lastName":"Nowak",
        "email":"ola@nowak.pl",
        "date":1525036239278
    };

    it('correct event pass validation', () => {
        let valid = validate(correctEvent);
        expect(valid).to.deep.equal({errors:[],valid:true});
    });
    it("too long input", () => {
        let valid = validate(tooLongValue);
        expect(valid).to.deep.equal({errors:["Too long data (max 30)"],valid:false});
    });
    it('wrong email', () => {
        let valid = validate(wrongEmail);
        expect(valid).to.deep.equal({errors:["Incorrect email"],valid:false});
    });
    it('invalid date', () => {
        let valid = validate(invalidDate);
        expect(valid).to.deep.equal({errors:["Wrong date!"],valid:false});
    });
    it('missing value', () => {
        let valid = validate(missingValue);
        expect(valid).to.deep.equal({errors:["Missing fields"],valid:false});
    });
    it('date from past', () => {
        let valid = validate(dateFromPast);
        expect(valid).to.deep.equal({errors:["Incorrect date"],valid:false});
    });

});