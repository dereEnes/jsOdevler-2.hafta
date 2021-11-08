function isFriend(num1,num2){
let sumOfDivider1 = findDivider(num1)
console.log(sumOfDivider1);
let sumOfDivider2 = findDivider(num2)
console.log(sumOfDivider2);
if(sumOfDivider1 === num2 && sumOfDivider2 === num1){
console.log("Arkadaş sayılardır.")
}else{
console.log("Değildir.");
} }
function findDivider(number) {
    
    let sum = 0
    for(let i=1;i<number;i++){
        if(number % i == 0){
            sum += i
        }
    }
    return sum;
  }
isFriend(220,284)



