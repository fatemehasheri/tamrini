array1 = [1, 2, 3];
array2 = [1, 2, 5, 7];

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("error");
    return;
  }
  const myObj = {};
  for (let index in array2) {
    /*if(array2[index]===array1[index])
        {
            myObj[index]=true    
        }
        else{
            myObj[index] = false
        }*/
    myObj[index] = array1[index] === array2[index];
  }
  return myObj;
}
console.log(compareArrays(array1, array2));
