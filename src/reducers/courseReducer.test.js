import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const course = {id: 'B', title: 'New title'};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(c => c.id === course.id);
    const untouchedCourse = newState.find(c => c.id === 'A');

    // assert
    expect(updatedCourse.title).toEqual(course.title);
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });

  it('should delete a course when passed DELETE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const courseId = 'B';
    const action = actions.deleteCourseSuccess(courseId);

    // act
    const newState = courseReducer(initialState, action);
    const deletedCourse = newState.find(c => c.id === courseId);
    const untouchedCourseA = newState.find(c => c.id === 'A');
    const untouchedCourseC = newState.find(c => c.id === 'C');

    // assert
    expect(deletedCourse).toBe(undefined);
    expect(untouchedCourseA.title).toEqual('A');
    expect(untouchedCourseC.title).toEqual('C');
    expect(newState.length).toEqual(2);
  });

  it('should return courses when passed LOAD_COURSES_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'}
    ];
    const newCourses = [
      {id: 'X', title: 'X'},
      {id: 'Y', title: 'Y'},
      {id: 'Z', title: 'Z'}
    ];
    const action = actions.loadCoursesSuccess(newCourses);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState[0].title).toEqual('X');
    expect(newState[1].title).toEqual('Y');
    expect(newState[2].title).toEqual('Z');
    expect(newState.length).toEqual(3);
  });
});
