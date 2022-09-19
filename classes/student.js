const Person = require('./person');

class Student extends Person {

  constructor(firstName,lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
    
  }
  

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return `Both students have the same GPA`
    }
  }
}

const student1 = new Student("billy", "johnson", "software-development", 3.2);
const someStudent1 = new Student('Grant', 'Cheadle', '19', 'comp-sci', '3.6');
//console.log(Person.compareGPA(someStudent, someStudent1));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}