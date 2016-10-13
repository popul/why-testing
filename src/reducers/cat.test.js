import { expect } from 'chai';

import catReducer from './cat';

describe('reducer cat', () => {
    it('cat fetched', () => {
        const actual = catReducer(undefined, {
            type: 'CAT_FETCHED',
            payload: 'http://apicat.com/foo/bar'
        });
        const expected = {
            url: 'http://apicat.com/foo/bar'
        }

        expect(actual).to.eql(expected);
    })
});
