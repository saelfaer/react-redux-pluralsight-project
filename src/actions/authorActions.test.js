import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';

describe('Author Actions', () => {

  describe('loadAuthorsAction', () => {
    it('should create a LOAD_AUTHORS_SUCCESS action', () => {
      const authors = [{id: 'clean-code', title: 'Clean Code'}];
      const expectedAction = {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
      };

      const action = authorActions.loadAuthorsSuccess(authors);
      expect(action).toEqual(expectedAction);
    });
  });
});
