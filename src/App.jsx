import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addNewStudnt = (newStudent) => {
    // Create a new array
    const updatedStudentList = [...students, newStudent];

    console.log(" in App ", students);
    setStudents(updatedStudentList);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent addNewStudent={addNewStudnt} />
      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          console.log(student);

          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
