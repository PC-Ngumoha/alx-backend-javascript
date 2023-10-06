/// <reference path="subjects/Teacher.ts"/>
/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/React.ts"/>
/// <reference path="subjects/Java.ts"/>

export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;

export let cTeacher: Subjects.Teacher = {
  firstName: 'Chukwuemeka',
  lastName: 'Ngumoha',
  experienceTeachingC: 10
};

console.log('C++');
// cpp.setTeacher(cTeacher);
// cpp.getRequirements();
// cpp.getAvailableTeacher();

console.log('Java');
// java.setTeacher(cTeacher);
// java.getRequirements();
// java.getAvailableTeacher();

console.log('React');
// react.setTeacher(cTeacher);
// react.getRequirements();
// react.getAvailableTeacher();
