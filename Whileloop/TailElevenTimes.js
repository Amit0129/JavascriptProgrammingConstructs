var tailCount = 0
var count = 0;
while(tailCount<11){
    let check = Math.floor(Math.random() * 10) % 2;
    if(check == 1){
        tailCount++;
    }
    count++;
}
console.log("total Toss = " + count);
console.log("Total Tail Count = "+tailCount);