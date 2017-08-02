

var newarray = []
var a =[10,35,50]

function findPair(x,a){

for (j = 0; j< a.length; j++){

  for (i = 0; i< a.length; i++){
      if (a[j] + a[i] === x){
        newarray.push([i,j])
      }
  }
}
console.log(newarray)
}
