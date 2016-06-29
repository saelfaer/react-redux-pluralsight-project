import expect from 'expect';
import authorReducer from './authorReducer';
import * as actions from '../actions/authorActions';

describe('Author Reducer', () => {
  it('should add an author when passed CREATE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {firstName: 'A'},
      {firstName: 'B'}
    ];
    const newAuthor = {firstName: 'C'};
    const action = actions.createAuthorSuccess(newAuthor);

    // act
    const newState = authorReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].firstName).toEqual('A');
    expect(newState[1].firstName).toEqual('B');
    expect(newState[2].firstName).toEqual('C');
  });

  it('should update an author when passed UPDATE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A', lastName: 'AL'},
      {id: 'B', firstName: 'B', lastName: 'BL'},
      {id: 'C', firstName: 'C', lastName: 'CL'}
    ];
    const author = {id: 'B', firstName: 'New firstName', lastName: 'New lastName'};
    const action = actions.updateAuthorSuccess(author);

    // act
    const newState = authorReducer(initialState, action);
    const updatedAuthor = newState.find(a => a.id === author.id);
    const untouchedAuthor = newState.find(a => a.id === 'A');

    // assert
    expect(updatedAuthor.firstName).toEqual(author.firstName);
    expect(updatedAuthor.lastName).toEqual(author.lastName);
    expect(untouchedAuthor.firstName).toEqual('A');
    expect(untouchedAuthor.lastName).toEqual('AL');
    expect(newState.length).toEqual(3);
  });

  it('should delete an author when passed DELETE_AUTHOR_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A', lastName: 'AL'},
      {id: 'B', firstName: 'B', lastName: 'BL'},
      {id: 'C', firstName: 'C', lastName: 'CL'}
    ];
    const authorId = 'C';
    const action = actions.deleteAuthorSuccess(authorId);

    // act
    const newState = authorReducer(initialState, action);
    const deletedAuthor = newState.find(a => a.id === authorId);
    const untouchedAuthorA = newState.find(a => a.id === 'A');
    const untouchedAuthorB = newState.find(a => a.id === 'B');

    // assert
    expect(deletedAuthor).toBe(undefined);
    expect(untouchedAuthorA.firstName).toEqual('A');
    expect(untouchedAuthorA.lastName).toEqual('AL');
    expect(untouchedAuthorB.firstName).toEqual('B');
    expect(untouchedAuthorB.lastName).toEqual('BL');
    expect(newState.length).toEqual(2);
  });

  it('should return authors when passed LOAD_AUTHORS_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', firstName: 'A', lastName: 'AL'}
    ];
    const newAuthors = [
      {id: 'X', firstName: 'X', lastName: 'XL'},
      {id: 'Y', firstName: 'Y', lastName: 'YL'},
      {id: 'Z', firstName: 'Z', lastName: 'ZL'}
    ];
    const action = actions.loadAuthorsSuccess(newAuthors);

    // act
    const newState = authorReducer(initialState, action);

    // assert
    expect(newState[0].firstName).toEqual('X');
    expect(newState[0].lastName).toEqual('XL');
    expect(newState[1].firstName).toEqual('Y');
    expect(newState[1].lastName).toEqual('YL');
    expect(newState[2].firstName).toEqual('Z');
    expect(newState[2].lastName).toEqual('ZL');
    expect(newState.length).toEqual(3);
  });
});
