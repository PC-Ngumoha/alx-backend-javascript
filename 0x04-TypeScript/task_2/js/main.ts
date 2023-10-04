interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  const salaryValue = typeof salary === 'string'
                      ? Number(salary.replace('$', ''))
                      : salary;

  if (salaryValue < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// used as a type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// uses type predicate: isDirector
function executeWork(employee: Director | Teacher): string {
  if(isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Creating string literal type alias
type Subjects = 'Math' | 'History';

function todayClass(subject: Subjects): string {
  return `Teaching ${subject}`;
}

console.log(todayClass('Math'));
console.log(todayClass('History'));
