
const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id: 13,
        name: "Houston",
        age: 21,
      },
    ],
  };
  
  // Take the school object and create the following methods to
  // that object:
  
  // 1. A method called “findPerson” takes two arguments, a type
  // (either a student or teacher), and an id. It will return a
  // particular object of that person.
  function findPerson(type, id) {
    school[type].find((ids) => {
      if (ids.id == id) {
        console.log(ids.name);
      }
    });
  }
  
  findPerson("students", 13);
  // 2. A method called “assignStudent” that takes two
  // arguments, a student’s id and a subject. Assign all of the
  // students to the first available teacher who teaches that
  // subject and who is not in full capacity. If all of the teachers
  // are in the full capacity log to the console “Sorry, no
  // available teachers left”.
  
  function assignStudent(subj) {
    school.teachers.find((teacher) => {
      teacher.subjects.find((classes) => {
        if (classes == subj) {
          for (const i of school.students) {
            if (teacher.capacityLeft > 0) {
              teacher.students.push(i.name);
              teacher.capacityLeft -= 1;
            } else {
              console.log("Class is full!");
              console.log(teacher);
            }
          }
        }
      });
    });
  }
  assignStudent("chemistry");
  
  // 3. A method called “assignTeachersSubject” that takes two
  // arguments, the teacher’s id, and a new subject. Assign the
  // new subject to that particular teacher if that subject
  // doesn’t exist in their array of subjects.
  
  console.log("----------------");
  
  function assignTeachersSubject(id, subj) {
    school.teachers.find((ids) => {
      if (ids.id == id && ids.subjects.indexOf(subj) === -1) {
        ids.subjects.push(subj);
        console.log(ids);
      }
    });
  }
  assignTeachersSubject(1, "pepe");