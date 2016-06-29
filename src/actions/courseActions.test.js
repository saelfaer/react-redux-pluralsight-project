import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseAction', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadCoursesAction', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      // arrange
      const courses = [{id: 'clean-code', title: 'Clean Code'}];
      const expectedAction = {
        type: types.LOAD_COURSES_SUCCESS,
        courses
      };

      // act
      const action = courseActions.loadCoursesSuccess(courses);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('updateCourseAction', () => {
    it('should create an UPDATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.UPDATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = courseActions.updateCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('deleteCourseAction', () => {
    it('should create a DELETE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.DELETE_COURSE_SUCCESS,
        courseId: course.id
      };

      // act
      const action = courseActions.deleteCourseSuccess(course.id);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Course Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, [{ id: 1, firstName: 'Cory', lastName: 'House'}]);

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, courses: [{id: 'clean-code', title: 'Clean Code'}]}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });

  it('should create BEGIN_AJAX_CALL and CREATE_COURSE_SUCCESS when saving a new course', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .post('/courses')
    //   .reply(200, { id: 1, firstName: 'Cory', lastName: 'House'});

    const course = {
      title: 'Clean Code'
    };

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.CREATE_COURSE_SUCCESS, course: {id: 'Clean-Code', title: 'Clean Code'} }
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.saveCourse(course)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.CREATE_COURSE_SUCCESS);
      done();
    });
  });

  it('should create BEGIN_AJAX_CALL and UPDATE_COURSE_SUCCESS when saving a new course', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .put('/courses/:id')
    //   .reply(200, { id: 1, firstName: 'Cory', lastName: 'House'});

    const course = {
      id: 'clean-code',
      title: 'Clean Code'
    };

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.UPDATE_COURSE_SUCCESS, course: {id: 'clean-code', title: 'Clean Code'} }
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.saveCourse(course)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.UPDATE_COURSE_SUCCESS);
      done();
    });
  });

  it('should create BEGIN_AJAX_CALL and DELETE_COURSE_SUCCESS when saving a new course', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .delete('/courses/:id')
    //   .reply(204);

    const courseId = 'clean-code';

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.DELETE_COURSE_SUCCESS, course: {id: 'clean-code', title: 'Clean Code'} }
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.deleteCourse(courseId)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.DELETE_COURSE_SUCCESS);
      done();
    });
  });

});
