function isPerfectNumber(num){
    let sumOfDivider = 0;
    for(let i=2; i<num ; i++){
        if(num % i === 0){
            sumOfDivider += i;
        }
    }
    if(sumOfDivider+1 === num) console.log(num)
}

function perfectNumbers(limit){
for (let index = 5; index < limit; index++){
    isPerfectNumber(index);
}
}
perfectNumbers(10000);