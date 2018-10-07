https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array/

https://www.freecodecamp.org/forum/t/question-re-functional-programming-use-the-filter-method-to-extract-data-from-an-array/132737/5



// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line

var filteredList = watchList.map(greaterThan()
  
  let myObj = '"titel:" "' + obj.Title + '", "rating:" "' + obj.imdbRating + '"'
  console.log(myObj)
  )

function greaterThan (obj){
  console.log('greaterThan called')
  let objF = parseFloat(obj.imdbRating)
  if (objF >= 8.0){
    return true 
    console.log('adding' + obj.Title)
  }
    else {
      return false
    }
}

 
// Add your code above this line

console.log(filteredList); 




//solution https://www.freecodecamp.org/forum/t/question-re-functional-programming-use-the-filter-method-to-extract-data-from-an-array/132737/5

var filteredList = watchlist.map (function(obj){
  let title = obj.Title;
  let rating = obj.imdbRating;

  var myObj = {
    title,
    rating
  };
  return myObj;
});

function greaterThan(obj){
  if (obj.rating >=8 ) {
    return true;
  } else {
    return false
  }
};
filteredList = filteredList.filter (greaterThan);







https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method


https://www.freecodecamp.org/forum/t/return-part-of-an-array-using-the-slice-method/196942

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  // var sliceArray = anim
  console.log(inputAnim.slice(beginSlice,endSlice))
  return inputAnim.slice(beginSlice,endSlice)
    // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1 ,4); 





https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method

https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/combine-two-arrays-using-the-concat-method


function nonMutatingConcat(original, attach) {
  // Add your code below this line
   
//NOTE TO SELF: ORIGINAL + ATTACH ARE parameters passed along by nonMutatingConcat which are first,second)

  // return first.concat.second   
    return original.concat(attach);
 

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);






https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data

https://www.freecodecamp.org/forum/t/struggling-with-reduce-functional-programming-use-the-reduce-method-to-analyze-data/210445/8

// the global variable
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "Released": "16 Jul 2010",
                   "Runtime": "148 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Christopher Nolan",
                   "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                   "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
                   "Language": "English, Japanese, French",
                   "Country": "USA, UK",
                   "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Interstellar",
                   "Year": "2014",
                   "Rated": "PG-13",
                   "Released": "07 Nov 2014",
                   "Runtime": "169 min",
                   "Genre": "Adventure, Drama, Sci-Fi",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan, Christopher Nolan",
                   "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
                   "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                   "Language": "English",
                   "Country": "USA, UK",
                   "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
                   "Metascore": "74",
                   "imdbRating": "8.6",
                   "imdbVotes": "910,366",
                   "imdbID": "tt0816692",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "Released": "18 Jul 2008",
                   "Runtime": "152 min",
                   "Genre": "Action, Adventure, Crime",
                   "Director": "Christopher Nolan",
                   "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
                   "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
                   "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
                   "Language": "English, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                   "Metascore": "82",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {  
                   "Title": "Batman Begins",
                   "Year": "2005",
                   "Rated": "PG-13",
                   "Released": "15 Jun 2005",
                   "Runtime": "140 min",
                   "Genre": "Action, Adventure",
                   "Director": "Christopher Nolan",
                   "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
                   "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
                   "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
                   "Language": "English, Urdu, Mandarin",
                   "Country": "USA, UK",
                   "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
                   "Metascore": "70",
                   "imdbRating": "8.3",
                   "imdbVotes": "972,584",
                   "imdbID": "tt0372784",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "Released": "18 Dec 2009",
                   "Runtime": "162 min",
                   "Genre": "Action, Adventure, Fantasy",
                   "Director": "James Cameron",
                   "Writer": "James Cameron",
                   "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
                   "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                   "Language": "English, Spanish",
                   "Country": "USA, UK",
                   "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
                   "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
                   "Metascore": "83",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

// Add your code below this line


//Answer from HINT
//https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data
// var averageRating = watchList.filter(x => x.Director === “Christopher Nolan”).map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === “Christopher Nolan”).length;


/*
What's the average IMDB rating for all of the Christopher Nolan Movies in the watchlist?
*/

// Find subset of movies directed by Christopher Nolan
let cNolanMovies = watchList.filter( item => item.Director == "Christopher Nolan" );

// Get the ratings for those movies
let movieRatings = cNolanMovies.map( item => Number(item.imdbRating) );

// calculate average
let averageRating = movieRatings.reduce( (total, sum) =>  total + sum )/movieRatings.length;



// Add your code above this line

console.log(averageRating); 




 Sort an Array Alphabetically using the sort Method
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method

answer:
https://www.freecodecamp.org/forum/t/sort-an-array-alphabetically-using-the-sort-method-sorting/209090

explanation: 
https://www.freecodecamp.org/forum/t/sort-an-array-alphabetically-using-the-sort-method-what-does-the-return-statements-in-sort-method-signify/225211

function alphabeticalOrder(arr) {
  // Add your code below this line
    return arr.sort(function(a, b) {
    return a > b; 
    console.log (arr)
    }); 
  

  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);





Split a String into an Array Using the split Method

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method


https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method


function splitify(str) {
  // Add your code below this line
  //var bySpace = str.split(/( -)/g);
  return str.split(/\W/);

  console.log(bySpace)

  
  // Add your code above this line
}
splitify("Hello World,I-am code");




Combine an Array into a String Using the join Method

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

function sentensify(str) {
  // Add your code below this line
    return str.split(/\W/).join(' '); 


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");





Basic Algorithm Scripting

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit


function convertToF(celsius) {
  var fahrenheit = (celsius * (9/5)) + 32;
  return fahrenheit;
}

convertToF(30);



Basic Algorithm Scripting: Reverse a String
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string



function reverseString(str) {
  // var reverse = [];
  // reverse.push(str);
  // console.log(reverse);
  
//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb      
// Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 console.log(splitString)
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 console.log(reverseArray)
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
console.log(joinArray)
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  
  return str;
}

reverseString("hello");




https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/


https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38



function factorialize(num) {
  if (num < 0){
       console.log(num)

    return -1;
 } else if (num == 0){
      console.log(num)

   return 1;
   
 } else {
   console.log(num)
   return num * factorialize (num -1);

 } 
  
  return num;
}

factorialize(5);





Basic Algorithm Scripting: Find the Longest Word in a String

https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string


function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
// // I need to load the string into an array as individual words
//   var words = str.split(' '); str.split(',');
//    console.log(words + ' these are the words');
//     var arr = [];
//   arr.push(words)
//   console.log(arr + ' this is the array')
//   console.log(arr.length + ' this array is this long')
// // I need to get the length of each entry in characters
// let i =0
//   for (i = 0; i <= arr.length; i++){
//     console.log (i)
//     arr[i].lenght
//     console.log(arr[i])
//     return arr[i].length
//   }
// // The amount of characters of the longest entry needs to be returned (not the object property itself)
//   return str.length;
// }

findLongestWordLength("The quick brown fox jumped over the lazy dog");




Basic Algorithm Scripting: Return Largest Numbers in Arrays
answer: https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/


https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/



function largestOfFour(arr) {
  var results = []
  for (var i = 0 ; i < arr.length; i++){
      var largestNo = arr[i][0]
    console.log('this is index '+ i +' of the array arr '+ arr[i] + ' and the length of this sub array is '+ arr[i].length)
    for (var x = 1 ; x < arr[i].length; x++) {
       if (arr[i][x] > largestNo){
        largestNo = arr[i][x];
       } 
      }
      results[i] = largestNo;
  }
  return results;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])



//answer:
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}


Basic Algorithm Scripting: Confirm the Ending

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending



function confirmEnding(str, target) {
  // substring info : https://www.w3schools.com/jsref/jsref_substring.asp
   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring



  //get the length of a string
  var strLength= str.length
    console.log('strlength = '+ strLength)
  //get the length of the target
  var lengthTarget= target.length
    console.log('targetlength = '+lengthTarget)
  //length of string - length of target = start position index substring
  var indexStart = strLength-lengthTarget
  console.log('start is '+indexStart)
  //use  substring method on the string
      //Do I need to store it in a different var?
    //Yes - output needs to be compared with target
  var tempString = str.substring(indexStart)
    console.log('does this work '+ tempString)
    console.log('does this work'+ str)

  if (tempString == target){
    return true
  } else {
    return false
  }   
  //new func - compare substring output === target, return confirmEnding


  return ;
}

confirmEnding("Bastian", "n");



Basic Algorithm Scripting: Repeat a String Repeat a String
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string/


function repeatStringNumTimes(str, num) {
    console.log('current str is '+str)
var altstr = ""

  if (num >= 1) {
    for (var i=1; i<=num; i++){
      var altstr = altstr + str
        console.log('loop is at '+i+ ' str is '+str+ ' altstr = '+altstr + ' and needs to run '+num+ ' times')
    } 
    //  str = altstr
      console.log('new str is '+str)
    return altstr

  } else {
    altstr = ""
    return altstr
  }
   console.log('last str is '+str)
  return altstr
}

repeatStringNumTimes("*", 3);


Basic Algorithm Scripting: Truncate a String

https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string/
//note .slice method can also be used on strings
function truncateString(str, num) {

console.log ("Num is = "+num)
console.log ("Str is = "+str)
console.log ("length is = "+str.length)

if (num < str.length){
  var slice = str.slice(0, num) + "...";
  console.log(slice)
  return slice
  } else {
    var slice = str.slice(0, num);
  console.log(slice)
  return slice
  }
return slice;
 
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)




