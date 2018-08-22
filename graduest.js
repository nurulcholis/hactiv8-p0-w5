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
  for(var i = 0; i < graduates.length; i++){
    myData[graduates[i]['class']] = [];
    var temp = null;
    for(var j = 0; j < graduates.length; j++){
        if(graduates[i]['class'] === graduates[j]['class']){
            if(temp === null){
                temp = graduates[j];
            }
            if(temp !== null){
                if(temp['score'] > 75){
                    temp.score = graduates[j]['score'];
                }
            } 
        }
    }
    myData[graduates[i]['class']].push(temp);
  }

  console.log(myData);