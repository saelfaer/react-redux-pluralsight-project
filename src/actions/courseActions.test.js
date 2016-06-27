import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', () => {
  describe('createCourseAction', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadCoursesAction', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      const courses = [{id: 'clean-code', title: 'Clean Code'}];
      const expectedAction = {
        type: types.LOAD_COURSES_SUCCESS,
        courses
      };

      const action = courseActions.loadCoursesSuccess(courses);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateCourseAction', () => {
    it('should create an UPDATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.UPDATE_COURSE_SUCCESS,
        course: course
      };

      const action = courseActions.updateCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteCourseAction', () => {
    it('should create a DELETE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.DELETE_COURSE_SUCCESS,
        courseId: course.id
      };

      const action = courseActions.deleteCourseSuccess(course.id);
      expect(action).toEqual(expectedAction);
    });
  });
});
