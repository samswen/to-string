/* eslint-disable no-undef */
'use strict';

const to_string = require('../src');

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('test to_string with a string', () => {

    it('verifies it should return the string', async () => {

        const s = to_string('Test string');

        //console.log(s);
        assert.isNotNull(s);
        expect(s).to.be.an('string');
        expect(s).equals('Test string');
    });
});

describe('test to_string with a circle referenced object', () => {

    it('verifies it should return a string', async () => {

        const b = { name: 'b' };
        const a = {
            name: 'a',
            reference_to: b,
        };
        b['reference_to'] = a;

        const s = to_string(a);

        //console.log(s);
        assert.isNotNull(s);
        expect(s).to.be.an('string');
        expect(s).equals('{"name":"a","reference_to":{"name":"b"}}');
    });
});