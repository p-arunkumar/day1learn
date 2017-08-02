var a = [4, false, 5, null, 6, 0, 7, ,8]

function filterArrayValues (a) {
  var b = a.filter(function (item, index, newarray) {
    if (item !== null && item !== false && item !== 0 && item !== ' ') {
      return newarray
      ;
    }
  });
  console.log(b)
}
