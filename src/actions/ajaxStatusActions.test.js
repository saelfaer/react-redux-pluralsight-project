import expect from 'expect';
import * as ajaxStatusActions from './ajaxStatusActions';
import * as types from './actionTypes';

describe('Ajax Status Actions', () => {
  describe('beginAjaxCallAction', () => {
    it('should create a BEGIN_AJAX_CALL action', () => {
      const expectedAction = {
        type: types.BEGIN_AJAX_CALL
      };

      const action = ajaxStatusActions.beginAjaxCall();
      expect(action).toEqual(expectedAction);
    });
  });

  describe('ajaxCallErrorAction', () => {
    it('should create a AJAX_CALL_ERROR action', () => {
      const expectedAction = {
        type: types.AJAX_CALL_ERROR
      };

      const action = ajaxStatusActions.ajaxCallError();
      expect(action).toEqual(expectedAction);
    });
  });
});
