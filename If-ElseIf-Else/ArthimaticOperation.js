var a = 5;
var b = 6;
var c = 7;
var arthOpOne = a + b * c;
var arthOptwo = a % b + c;
var arthOpthree = c + a / b;
var arthOpFour = a * b + c;
//For Maximum
if(arthOpOne>arthOptwo && arthOpOne>arthOpthree && arthOpOne>arthOpFour){
    console.log("Arthimatic Fiest OP is maximum "+arthOpOne)
}
else if(arthOptwo>arthOpOne && arthOptwo>arthOpthree && arthOptwo>arthOpFour){
    console.log("Arthimatic Second OP is maximum "+arthOptwo)
}
else if(arthOpthree>arthOpOne && arthOpthree>arthOptwo && arthOpthree>arthOpFour){
    console.log("Arthimatic Thied OP is maximum "+arthOpthree)
}
else{
    console.log("Arthimatic Forth OP is maximum "+arthOpFour)
}
//For Minimum
if(arthOpOne<arthOptwo && arthOpOne<arthOpthree && arthOpOnearthOpFour){
    console.log("Arthimatic Fiest OP is minimum "+arthOpOne)
}
else if(arthOptwo < arthOpOne && arthOptwo < arthOpthree && arthOptwo < arthOpFour){
    console.log("Arthimatic Second OP is minimum "+arthOptwo)
}
else if(arthOpthree < arthOpOne && arthOpthree < arthOptwo && arthOpthree < arthOpFour){
    console.log("Arthimatic Thied OP is minimum "+arthOpthree)
}
else{
    console.log("Arthimatic Forth OP is minimum "+arthOpFour)
}