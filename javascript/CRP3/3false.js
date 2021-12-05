let result =''
let myarray =[]
function falseNumber(array) {
    for(let i of array) {
        //result =i?i:1
        result = i || 1
        myarray.push(result)
    }
    return myarray
}
console.log(falseNumber([2,4,0,0]))
