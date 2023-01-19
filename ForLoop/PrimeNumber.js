var number = 2;
var count = 0;
for (var i = 1; i <= number; i++)
{
    if (number % i ==0){
        count++;
    }
}
if(count == 2){
    console.log(number+ " Is Prime Number")
}
else{    
    console.log(number+ " Is NOT a Prime Number")
}