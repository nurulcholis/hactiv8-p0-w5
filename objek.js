function test(arr){
    var abjad = [];
    //var result = [];
    for(var i = 0; i < arr.length; i++){
        var cek = false;
        for(var j = 0; j < abjad.length; j++){
            if(abjad[j] === arr[i][0]){
                cek = true;
            }
        }
        if(cek === false){
            abjad.push(arr[i][0]);
        }
    }

    var obj = {};
    for(var i = 0; i < abjad.length; i++){
        obj[abjad[i]] = [];
        for(var j = 0; j < arr.length; j++){
            if(abjad[i] === arr[j][0]){
                obj[abjad[i]].push(arr[j]);
            }
        } 
    }
    return obj;
}

console.log(test(['Ayam','Bebek','Anjing']));

// {
//     'A' : ['ayam','anjing'],
//     'B' : ['bebek']
// }