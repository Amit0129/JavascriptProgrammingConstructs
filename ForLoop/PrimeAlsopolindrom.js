function Prime(num){
    var count = 0;
    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    }
    else{
        return false;
    }

}
function Reverse(a){
    var reverse = 0;
    while(a > 0){
        var reminder = Math.floor(a % 10);
        reverse = (reverse * 10)+reminder;
        a = Math.floor(a/10);
    }
    return reverse;
}

var number = 31;
if(Prime(number) && Prime(Reverse(number))){
    console.log("The number " +number+ " Is prime And Its polindram Number is Also Prime")
}
else{
    console.log("The Number Not Pass the both test")
}