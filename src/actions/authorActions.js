import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function createAuthorSuccess(author) {
  return {
    type: types.CREATE_AUTHOR_SUCCESS,
    author
  };
}

export function updateAuthorSuccess(author) {
  return {
    type: types.UPDATE_AUTHOR_SUCCESS,
    author
  };
}

export function deleteAuthorSuccess(authorId) {
  return {
    type: types.DELETE_AUTHOR_SUCCESS,
    authorId
  };
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
