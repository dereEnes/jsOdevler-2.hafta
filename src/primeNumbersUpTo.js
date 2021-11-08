  function isPrime(num){
    for(let i = 2; i<num; i++){//if a number can divisible by a number from 2 to itself that number isn't prime number
      if(num % i === 0){
        return false;
      }
    }
    return num > 1; //numbers less then 2 are not prime number
  }
  
  function findPrimes(num) {
      for(let i=2; i<num; i++){
        if(isPrime(num)){
            console.log(num)
        }
      }
  }

  findPrimes(1000);