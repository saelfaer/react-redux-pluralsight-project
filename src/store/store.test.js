import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('Should handle creating courses and updating', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const courses = [
      {id: '1', title: 'Clean Code'},
      {id: '2', title: 'Clean Code 2', category: 'sequels'}
    ];
    const [course1, course2] = courses;
    const course1Changed = {
      id: '1',
      title: 'Clean Code 101'
    };

    // act
    const action1 = courseActions.createCourseSuccess(course1);
    store.dispatch(action1);
    const action2 = courseActions.createCourseSuccess(course2);
    store.dispatch(action2);
    const action3 = courseActions.updateCourseSuccess(course1Changed);
    store.dispatch(action3);


    // assert
    const actualCourses = store.getState().courses;
    const expected1 = {
      id: '1',
      title: 'Clean Code 101'
    };
    const expected2 = {
      id: '2',
      title: 'Clean Code 2',
      category: 'sequels'
    };
    expect(actualCourses.length).toBe(2);
    expect(actualCourses[1]).toEqual(expected1);
    expect(actualCourses[0]).toEqual(expected2);
  });
});
