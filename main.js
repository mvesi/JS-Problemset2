// #1 Write a function firstReverse that takes a single string parameter and returns the
// string in reverse order.

function firstReverse(str){

	var strArray = str.split("");
	return strArray.reverse().join("");

}

console.log(firstReverse("chocolate is delicious"));


// #2 Write a function swapCase that takes a single string parameter and swaps the case
// of each character. For example: if a string is "Hello World" the output should be
// "hELLO wORLD". Let numbers and symbols stay the way they are.

var swapCase = function(str2){
	var str2Array = str2.split("");
	for(var i=0 ; i<str2Array.length ; i++){
		if(str2Array[i] === str2Array[i].toUpperCase()){
			str2Array[i] = str2Array[i].toLowerCase();
		}
		else {
			str2Array[i] = str2Array[i].toUpperCase();
		}
	}
	return str2Array.join("");

}

console.log(swapCase("Hello World"));

// Bonus: Write a function letterCount that takes a single string parameter and returns the
// first word with the greatest number of repeated letters. For example: "Today, is the
// greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it
// comes before ever which also has 2 e's. If there are no words with repeating letters
// return ­1. Words will be separated by single spaces.

function letterCount(str) { 
var strArray = str.split(" "); 
var mostRepeated = [];
  for(var i=0 ; i<strArray.length ; i++){
    var repeated = 0;
    var word = strArray[i].split("");
    for(var j=0 ; j<word.length ; j++){
      for(var k=j+1 ; k<word.length ; k++){
        if(word[j] === word[k]){
          repeated++;
        }}}
    mostRepeated.push(repeated);
  }

var highIndex = mostRepeated.indexOf(Math.max.apply(Math, mostRepeated));
  
  if(mostRepeated[highIndex] === 0){
    var ans = -1;
  }
  else{
    var ans = strArray[highIndex];
  }
  
  return ans; 
       
}
console.log(letterCount("Today, is the greatest day ever!"));

