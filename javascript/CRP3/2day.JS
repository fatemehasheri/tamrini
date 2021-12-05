function getnumber(number) {
    switch (number) {
        case 0:
            alert('saterday')
            break;
        case 1:
            alert('sunday')
            break;
        case 2:
            alert('monday')
            break;
        case 3:
            alert('tuersday')
            break;
        case 4:
            alert('wednesday')
            break;
        case 5:
            alert('thursday')
            break;
        case 6:
            alert('friday')
            break;
        default:
            break;
    }
}
const number1=+prompt('enter number')
alert(getnumber(number1))