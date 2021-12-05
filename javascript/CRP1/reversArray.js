let myArray=[1,2,3,4]
function reversArray(myArray)
{   let newArray =[]
    for(let i = myArray.length-1; i >= 0; i--)
    {
       newArray.push(myArray[i])
    }
    return newArray
}

console.log(reversArray(myArray))


//حل بدونfunction

/*let input= [1,2,3,4,5]
let newArray =[]
for(let i = input.length-1; i >= 0; i--)
{
    {
       newArray.push(input[i])
    }
}
console.log(newArray)*/
