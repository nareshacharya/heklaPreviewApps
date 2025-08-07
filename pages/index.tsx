import React, { useState } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

const Home: React.FC = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name: string, age: number) => {
    const newStudent = { name, age };
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <StudentForm />
      <StudentList students={students} />
    </div>
  );
};

export default Home;