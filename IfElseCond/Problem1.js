var num1 = Math.floor(Math.random()*900)+100;
var num2 = Math.floor(Math.random()*900)+100;
var num3 = Math.floor(Math.random()*900)+100;
var num4 = Math.floor(Math.random()*900)+100;
var num5 = Math.floor(Math.random()*900)+100;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log("Maximum Number is "+num1);
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log("Maximum Number is "+num2);
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log("Maximum Number is "+num3);
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log("Maximum Number is "+num4);
}
else
{
    console.log("Maximum Number is "+num5);
}
