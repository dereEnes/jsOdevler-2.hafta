function findPrimes(...nums) {
    let primeNums =nums.filter(num => isPrime(num));
    console.log(primeNums)
  }
  
  function isPrime(num){
    for(let i = 2; i<num; i++){//if a number can divisible by a number from 2 to itself that number isn't prime number
      if(num % i === 0){
        return false;
      }
    }
    return num > 1; //numbers less then 2 are not prime number
  }
  findPrimes(1,2,3,4,5,6,7,8,9,11,13,14,15,16,17,-5);