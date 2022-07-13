const Utils = require('../core/utils/utils.js');

let Integer = 1;
let String = 'String';
let StringEmpty = '';
let variableNula;
let variableUndefined = undefined;


describe('A variable is a Integer', () => {
    it(' Number not decimal is Integer', () => {
        expect(Utils.isInt(Integer)).toEqual(true);
    });
    it(' String is not Integer', () => {
        expect(Utils.isInt(String)).toEqual(false);
    });
});

describe('A variable is Empty', () => {
    it(' Variable with a null is Empty', () => {
        expect(Utils.isEmpty(variableNula)).toEqual(true);
    });
    it(' Variable undefined is Empty', () => {
        expect(Utils.isEmpty(variableUndefined)).toEqual(true);
    });
    it(' Variable defined and with value is not Empty', () => {
        expect(Utils.isEmpty(Integer)).toEqual(false);
    });
});

describe('Empty String', () => {
    it(' Return a empty string when is called', () => {
        expect(Utils.stringEmpty()).toEqual('');
    });
});

describe('Check if string is empty', () => {
    it(' Variable with value return false', () => {
        expect(Utils.isEmptyString(String)).toEqual(false);
    });
    it(' Variable empty value return true', () => {
        expect(Utils.isEmptyString(StringEmpty)).toEqual(true);
    });
    it(' Variable undefined return true', () => {
        expect(Utils.isEmptyString(variableUndefined)).toEqual(true);
    });
    it(' Variable with null value return true', () => {
        expect(Utils.isEmptyString(variableNula)).toEqual(true);
    });
});