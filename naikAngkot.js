function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var tampungObjek = [];
  var index = [];
  var myObj = {};

  for(var i = 0; i < arrPenumpang.length; i++){
      myObj = {};
      //index = [];
      myObj.penumpang = arrPenumpang[i][0];
      myObj.naikDari = arrPenumpang[i][1];
      myObj.tujuan = arrPenumpang[i][2];
      index = [];
      for(var k = 0; k < rute.length; k++){
        if(arrPenumpang[i][1] === rute[k]){
          index.push(k);
        }
        if(arrPenumpang[i][2] === rute[k]){
          index.push(k);
        }
      }
      myObj.bayar = (index[1]-index[0]) * 2000;
    //}
    //index = [];
    //console.log(myObj);
    tampungObjek.push(myObj);
  }
  //console.log(index);
  return tampungObjek;
  
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//console.log(naikAngkot([])); //[]
//console.log();

