var a = [.10, 1.2, 4.3, 2.1, 1.8]
var max = -100

function highestNumber(a) {
  for (i = 0; i <a.length; i++){
  a.forEach(function(element,index){
    if (element > max) {
      max = element
    }
  })
}
  console.log(max)

}
