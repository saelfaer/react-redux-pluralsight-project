import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Author Actions', () => {
  describe('loadAuthorsSuccessAction', () => {
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

  describe('createAuthorSuccessAction', () => {
    it('should create a CREATE_AUTHOR_SUCCESS action', () => {
      const author = {id: 'john-doe', firstName: 'John', lastName: 'Doe'};
      const expectedAction = {
        type: types.CREATE_AUTHOR_SUCCESS,
        author
      };

      const action = authorActions.createAuthorSuccess(author);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateAuthorSuccessAction', () => {
    it('should create a UPDATE_AUTHOR_SUCCESS action', () => {
      const author = {id: 'john-doe', firstName: 'John', lastName: 'Doe'};
      const expectedAction = {
        type: types.UPDATE_AUTHOR_SUCCESS,
        author
      };

      const action = authorActions.updateAuthorSuccess(author);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteAuthorSuccessAction', () => {
    it('should create a DELETE_AUTHOR_SUCCESS action', () => {
      const authorId = 'john-doe';
      const expectedAction = {
        type: types.DELETE_AUTHOR_SUCCESS,
        authorId
      };

      const action = authorActions.deleteAuthorSuccess(authorId);
      expect(action).toEqual(expectedAction);
    });
  });

});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Author Thunks', (done) => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('loadAuthors', () => {
    it('should fire BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS when loading courses', (done) => {
      // Here's an example call to nock.
      // nock('http://example.com/')
      //   .get('/authors')
      //   .reply(200, [{ id: 1, firstName: 'Cory', lastName: 'House'}]);

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_COURSES_SUCCESS, authors: [{id: 1, firstName: 'Cory', lastName: 'House'}]}
      ];

      const store = mockStore({authors: []}, expectedActions);
      store.dispatch(authorActions.loadAuthors()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
        done();
      });
    });
  });

});
