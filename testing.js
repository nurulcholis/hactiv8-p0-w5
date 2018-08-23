function graduates (students) {
    // Code disini
    var student = {};

    for(var i = 0; i < students.length; i++){
        student[students[i].class] = [];
    }
    
    //console.log(student);
    //let objStudent = {};
    for(let key in student){
        for(let i = 0; i < students.length; i++){
            let studentClass = students[i].class;
            let studentsScore = students[i].score;
            if(studentsScore > 75){
                if(studentClass === key){
                    student[key].push(students[i]);
                }
            }
        }
    }

    for(let key in student){
        for(let i = 0; i < student[key].length; i++){
            delete student[key][i].class;
        }
    }

    return student;
  }

  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  