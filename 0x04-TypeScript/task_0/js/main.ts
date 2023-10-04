interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Prince',
  lastName: 'Ngumoha',
  age: 22,
  location: 'Abuja, F.C.T, Nigeria'
};

const student2: Student = {
  firstName: 'Angela',
  lastName: 'Yu',
  age: 32,
  location: 'London, England, United Kingdom'
};

const studentsList: Student[] = [student1, student2];

// rendering the table
const body = document.querySelector('body') as HTMLBodyElement;
const table = document.createElement('table');

for (const student of studentsList) {
  const row = document.createElement('tr');
  row.append(...[
    document.createElement('th').textContent = `${student.firstName}`,
    document.createElement('th').textContent = `${student.location}`,
  ]);
  table.appendChild(row);
}

body.appendChild(table);
