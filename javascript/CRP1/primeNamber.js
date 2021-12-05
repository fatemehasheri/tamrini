let number1 = +prompt("pleas enter a namber1")
function primtNamber(number)
{
    if(number==1)
    {
        return false
    }
    else if(number==2)
    {
        return true
    }
    else
    {
        for(let counter=2;counter<number;counter++)
        {
            if(number%counter===0)
            {
                return false
            }
            else
            {
                return true
            }
        }
    }
}
console.log(primtNamber(number1))

