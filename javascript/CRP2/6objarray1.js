const myObj ={}
function compareArrays() { 
    for(let array of arguments){
        if(array.length!==arguments[0].length)
        {
           console.error("error")
           return
        }
    }
    for(let i=0;i<arguments[0].length;i++) {
        for (let array of arguments) {
        const isequal=array[i]===arguments[0][i]
        myObj[i]= isequal
        if (!isequal)
        {
            break
        }
        }
    }
    return myObj

}
console.log(compareArrays([1,2,3],[2,2,4],[1,2,4]))

/*const myObj ={}
function compareArrays() { 
    
    const arrayLength =arguments[0].length
    for(let array of arguments){
        if(array.length!==arrayLength)
        {
           console.log("error")
           return
        }
    }
    for(let i=0;i<arrayLength;i++) {
        let value =arguments[0][i]
        let equal =true
        for (let array of arguments) {
        //myObj[i]=array[i]===value
            if(array[i]!==value)
            {
                equal=false
                break
            }
        }
        myObj[i] =equal
    }
    return myObj

}
console.log(compareArrays([1,2,3],[2,2,4],[1,2,3]))*/



