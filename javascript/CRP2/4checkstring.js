string1="Abase boazarr"
string2="r"

function howmany(string1,string2) {
    let counter =0
    for(let i of string1){
        if(i===string2)
        {
            counter++
        }
    }

    return counter
}
console.log(howmany(string1,string2))
