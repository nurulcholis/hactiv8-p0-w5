function highestScore(students){
  var classSama = [];
  var output = {};
  for(var i = 0; i < students.length; i++){
    var cek = false;
    for(var j = 0; j < classSama.length; j++){
        if(students[i]['class'] === classSama[j]){
            cek = true;
        }
    }
    if(cek === false){
      output[students[i]['class']] = {};
      var temp = null;
      for(var k = 0; k < students.length; k++){
        if(students[i]['class'] === students[k]['class']){
            if(temp === null){
                temp = students[k];
            }
            if(temp !== null){
                if(temp.score < students[k]['score']){
                    temp.score = students[k]['score'];
                }
            }
        }
      }
      output[students[i]['class']] = temp; 
    }
  }

  for(let key in output){
    for(var i = 0; i < output[key].length; i++){
      delete output[key][i].class;
    }
  }

  

  return output;
}


  // TEST CASE
console.log(highestScore([
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

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

