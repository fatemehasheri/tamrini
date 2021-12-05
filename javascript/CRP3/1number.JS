const number1 = +prompt("enter a number")
function getnumber(number) {
    if(number>=1) {
        return 1
    } else if (number<=-1) {
        return -1 
    } else {
        return 0 
    }
}
console.log(getnumber(number1))
