function ageInDays(age) {
  if (age > 0) {
    const result = age * 365;
    return result;
  } else {
    return "error";
  }
}

console.log(ageInDays(65));

/*حل استاد به روش ورودی گرفتن از کاربر
const age =prompt("pleas enter your age : ")
if(age>0){
alert(age*365)
}
else
{
    alert('error')
}
*/
