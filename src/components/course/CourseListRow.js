import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, deleteCourse}) => {

  function remove(event) {
    event.preventDefault();
    deleteCourse(course.id);
  }

  return (
    <tr>
      <td>
        <a href={course.watchHref} target="_blank" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Watch</a>
      </td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <button type="button" className="btn btn-default btn-xs" onClick={remove}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;
