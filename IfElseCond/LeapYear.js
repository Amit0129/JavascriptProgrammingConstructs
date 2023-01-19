var year = 2020;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    console.log("The year "+year+" is leap year");
}
else
{
    console.log("The year "+year+" is NOT leap year");
}