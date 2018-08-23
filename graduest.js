var graduates = [
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
  ];

  var myData = {};
  var temp = null;
  for(var i = 0; i < graduates.length; i++){
    myData[graduates[i]['class']] = [];
    temp = null;
    for(var j = 0; j < graduates.length; j++){
        if(graduates[i]['class'] === graduates[j]['class']){
            if(temp === null){
                temp = graduates[j];
            }
            if(temp !== null){
                if(graduates[j]['score'] > 75){
                    temp.score = graduates[j]['score'];
                }
            } 
        }
    }
    myData[graduates[i]['class']].push(temp);
  }

  console.log(myData);