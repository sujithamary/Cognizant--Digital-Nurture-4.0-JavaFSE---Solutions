import React from 'react';

const courses = [
  { id: 'C1', name: "React Fundamentals", duration: "4 weeks" },
  { id: 'C2', name: "Advanced React", duration: "6 weeks" }
];

const CourseDetails = () => (
  <div>
    <h2>Course Details</h2>
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.name} - {course.duration}
        </li>
      ))}
    </ul>
  </div>
);

export default CourseDetails;
