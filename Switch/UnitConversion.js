var input = 20;
var operation = 3;
switch(operation){
    case 0:
        console.log("Feet to Inch")
        var result = input*12;
        console.log(result);
        break;
    case 1:
        console.log("Inch to Feet")
        var result = input/12;
        console.log(result);
        break;
    case 2:
        console.log("feet to Meter")
        var result = input*0.3048;
        console.log(result);
        break;
    case 3:
        console.log("meter to feet")
        var result = input/0.3048;
        console.log(result);
        break;

}