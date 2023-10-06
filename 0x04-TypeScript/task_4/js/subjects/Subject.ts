/// <reference path="Teacher.ts"/>

namespace Subjects {
  export class Subject {
   teacher: Teacher;

    constructor() {
      this.teacher = {firstName: '', lastName: ''};
    }

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}