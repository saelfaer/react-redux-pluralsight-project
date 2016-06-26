import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(courseId) {
  return { type: types.DELETE_COURSE_SUCCESS, courseId };
}

export function loadCourses() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(savedCourse => {
        if (course.id) {
          dispatch(updateCourseSuccess(savedCourse));
        } else {
          dispatch(createCourseSuccess(savedCourse));
        }
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}

export function deleteCourse(courseId) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    dispatch(deleteCourseSuccess(courseId));

    return courseApi.deleteCourse(courseId)
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
