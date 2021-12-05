function sumNumber(number) {
    if(number==0)
    {
        return 0
    } else {
        return number%10 +sumNumber(parseInt(number/10))
    }
}
console.log(sumNumber(0))
