//Minimum: 

// Your code here.
function min (a,b) {
  if (a < b) return a 
  } else {
  return b
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//Answer
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10




//Recursion:

// Your code here.

function isEven (a) {
  if (a%2 == 0)
  {
    return true;
  } else {
    return false;
  } 
  
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Answer
// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → false



//Excersize : Bean counting

// Your code here.
function countBs(x) {

  for (let i=0; i < x.length ; i++ ) {
 	 if (x[i] ==='B') {
     return countBs +1
  	} else {
      return
    }
    
  }


}


function countChar(x,z) {

  for (let i=0; i < x.length ; i++ ) {
 	 if (x[i] === z) {
     return countBs +=1
  	} else {
      return
    }
    
  }


}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


// Answer
// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;  
// }

// function countBs(string) {
//   return countChar(string, "B");
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4
