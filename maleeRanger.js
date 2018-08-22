function splite(str,symbol){
    var result = [];
    var temp = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] !== symbol){
           temp += str[i];
        }else{
            result.push(temp);
            temp = '';
        }

        if(i === str.length-1){
            result.push(temp);
        }
    }
    return result;
}

function meleeRangedGrouping (str) {
    //your code here
    var melee = [];
    var ranger = [];
    var afterSplit = splite(str,',');
    var lagi = splite(afterSplit,'-');
    
    for(var i = 0; i < lagi.length; i++){
        if(lagi[i] === 'Ranged'){
            ranger.push(lagi[i]);
        }else if(lagi[i] === 'Melee'){
            melee.push(lagi[i]);
        }
    }
    console.log(ranger);
    console.log(melee);
    console.log(lagi);
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  //console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  