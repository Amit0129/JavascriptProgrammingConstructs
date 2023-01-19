function Polidram(a,b){
    var reverse = 0;
    var temp = a;
    while(a > 0){
        var reminder = Math.floor(a % 10);
        reverse = (reverse * 10)+reminder;
        a = Math.floor(a/10);
    }
    if(reverse == b){
        return true;
    }
    else{
        return false;
    }
}

result = Polidram(23,32);
console.log(result)