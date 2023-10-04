interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  printTeacher(first: string, last: string): string
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

// StudentClass
interface StudentClassInterface {
  firstName: string,
  lastName: string,
  new(firstName: string, lastName: string): StudentClass,
  workOnHomework(): string,
  displayName(): string
}

class StudentClass {
  public firstName;
  public lastName;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

const student: StudentClass = new StudentClass('Chukwuemeka', 'Ngumoha');
console.log(student);
