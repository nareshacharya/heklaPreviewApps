import React, { useState } from 'react';

interface Student {
  name: string;
  age: number;
  email: string;
}

const StudentForm: React.FC = () => {
  const [student, setStudent] = useState<Student>({ name: '', age: 0, email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={student.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={student.age} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={student.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
```

```ts