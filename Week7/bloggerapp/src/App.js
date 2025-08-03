import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeView, setActiveView] = useState("books");

  // Method 1: If/else
  let component;
  if (activeView === "books") {
    component = <BookDetails />;
  } else if (activeView === "blogs") {
    component = <BlogDetails />;
  } else {
    component = <CourseDetails />;
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Buttons to switch views */}
      <button onClick={() => setActiveView("books")}>Show Books</button>
      <button onClick={() => setActiveView("blogs")}>Show Blogs</button>
      <button onClick={() => setActiveView("courses")}>Show Courses</button>

      <hr />

      {/* Method 1 */}
      {component}

      {/* Method 2: Ternary Operator */}
      {/* {activeView === "books" ? <BookDetails /> : <BlogDetails />} */}

      {/* Method 3: Logical AND */}
      {/* {activeView === "courses" && <CourseDetails />} */}
    </div>
  );
}

export default App;
