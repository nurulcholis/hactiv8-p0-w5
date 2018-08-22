var data = [
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
      score: 98,
      class: 'wolves'
    }
  ];

  var classSama = [];
  var output = {};
  for(var i = 0; i < data.length; i++){
    var cek = false;
    for(var j = 0; j < classSama.length; j++){
        if(data[i]['class'] === classSama[j]){
            cek = true;
        }
    }
    if(cek === false){
      output[data[i]['class']] = {};
      var temp = null;
      for(var k = 0; k < data.length; k++){
        if(data[i]['class'] === data[k]['class']){
            if(temp === null){
                temp = data[k];
            }
            if(temp !== null){
                if(temp.score < data[k]['score']){
                    temp.score = data[k]['score'];
                }
            }
        }
      }
      output[data[i]['class']] = temp;  
    }
  }

  console.log(output);
