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
  printTeacher: (first: string, last: string) => string
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher('Chukwuemeka', 'Ngumoha'));
