function meleeRangedGrouping (str) {
    //your code here
    var str2 = str.split(',');
    var arrSplit = [];
    for(var i = 0; i < str2.length; i++){
       arrSplit.push(str2[i].split('-'));
    }
    
    var type = {};
    for(var i = 0; i < arrSplit.length; i++){
       type[arrSplit[i][1]] = 0;
    }
    var hasil1 = [];
    var hasil2 = [];
    for(var i = 0; i < Object.keys(type).length; i++){
        for(var j = 0; j < arrSplit.length; j++){
            if(Object.keys(type)[i] === arrSplit[j][1]){
                if(arrSplit[j][1] === 'Ranged'){
                    hasil1.push(arrSplit[j][0]);
                }
                if(arrSplit[j][1] === 'Melee'){
                    hasil2.push(arrSplit[j][0]);
                }
            }
        }
    }
    var output = [hasil1,hasil2];
    return output;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  