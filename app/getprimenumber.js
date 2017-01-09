
'use strict'

module.exports = function getPrimes(range){
	if (range <2){
		return "invalid number";
	}
	var prime=[];
	var j=2;
	while (j<=range){
		if (isPrime(j)) {
			prime.push(j);
		}
	j++;	
	}
	return prime;
}

function isPrime(number){
	var i = 2;
  
  if (number == 2) {
   return true;	
  }
 
  while (i <= Math.sqrt(number)) {
   if (number % i == 0) {
    return false;
   }
   i=(i*2)-1;
  }
 
  return true;
 }

