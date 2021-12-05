// روش 1
function oddishOrEvenish(number) {
    const isString = String(number)
    let result =0
    for(let i=0;i<isString.length;i++)
    {
        result += Number(isString[i])
    }
    if(result%2 === 0)
    {
        return "Evenish"
    } else {
    return "oddish"
    }
}
console.log(oddishOrEvenish(4433))



// روش 2
/*
function oddishOrEvenish(number) {
    const isString = String(number)
    let result =0
    for(let digit of isString)
    {
        result += Number(digit)
    }
    if(result%2 === 0)
    {
        return "Evenish"
    } else {
    return "oddish"
    }
}

console.log(oddishOrEvenish(443))*/
//روش 3
/*
function oddishOrEvenish(number) {
    let result =0
    while(number>0) {
        let digit=number%10
        result +=digit
        number = parseInt(number/10)
    }
    if(result%2 === 0)
    {
        return "Evenish"
    } else {
    return "oddish"
    }
}

console.log(oddishOrEvenish(443))*/

