
//Round 1

/*Write a function lengths that accepts a single parameter as an argument, 
namely an array of strings. The function should return an array of numbers. 
Each number in the array should be the length of the corresponding string. 

To get you started, you'll need to loop through each string in the array and 
get the length of each one. 

Those lengths should be stored in a different array that you will return.

Remember that when building a function, you want to use declare a function with 
a name that accepts arguments. So for building our function called lengths that 
accepts an array of strings, it might look something like:*/



var list = ["nineynine", "yellow", "one", "kitty", "ten"];

function sizeOfWords(list){ //function called size of words with passing an argument of list
	var newArray = []; //naming a new variable called newArray
	for (var i = 0;  i < list.length; i++) { //need a for loop to iterate over the array
	newArray.push(list[i].length)//then we are pushing to the newArray the list and getting the  number of the list item's length (not sure if I'm explaining that correctly)
	
	}	
	return newArray;//returns the array
};
sizeOfWords(list);

//Round 2
/*Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
Use your function to find the following answers.
Reference: MDN: Math.pow() for Exponential numbers

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)*/


function transmogrifier(number1,number2,square){
	var resultOfFirstTwoNumbers = (number1 * number2);
	//console.log(resultOfFirstTwoNumbers)
	var numberExponent = square * square;
	//console.log(powerOf);
	var resultPlusPower = resultOfFirstTwoNumbers + numberExponent;
	console.log (resultPlusPower);
	//return transmogrifier;
	//console.log(transmogrifier)
};

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)
//look at Math.pow

//Round 3
/*Write a function called toonify that takes two parameters, accent and sentence.
If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
If the accent is "elmer", replace all "r" with "w".
Feel free to add your own accents as well!
If the accent is not recognized, just return the sentence as-is.
Reference: MDN: String.replace()

toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"*/

/* Ihad this one at first but it only takes off the first occurence of "th" 
function toonify(accent, sentence) {
	var sentence = sentence.replace("s", "th");
	console.log(sentence);
}	
toonify("daffy", "so you smell like sausage")*/

function toonify(accent, sentence) {
	//use ---> accent.toLowerCase();

	if (accent == "daffy"){
		var re = /s/gi;//this will replace all of the instances of s with th
		var sentence = sentence.replace(re, "th");
		console.log(sentence);
 	}
 	else if (accent =="elmer"){
 		var re = /r/gi;//this will replace all of the instances of s with th
		var sentence = sentence.replace(re, "w");
		console.log(sentence);
 	}
 	else
 		console.log(sentence);
};

toonify("daffy", "so you smell like sausage")
toonify("elmer", "rain, rain, go away")
toonify("misspiggy", "I love you kermy") //okay miss piggy isn't a looneytoon but I couldn't think of one



//Round 4
/*Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation. You'll need to use String.split() to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop through them to create a new string).
References:
MDN: String.split()
MDN: Array.reverse()
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"*/

function wordReverse(sentence){
	var sentence = sentence.split(" ") //use string split to create an array of words
	//console.log(sentence);
	sentence = sentence.reverse();//then reverse the order of the array
	//sentence = sentence.reverse().join(" ") can use this instead of the for loop
	for (i = 0; i < sentence.length; i++);//then loop through the array
	console.log(sentence);
};

wordReverse("Now I know what a TV dinner feels like")


//Round 5
/*Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.
References:
MDN: String.split()
MDN: Array.reverse()
letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"*/


//not working my letters AND my string are reversed

function letterReverse(sentence){
	
	var reversedSentence = sentence.split("");
	var newArray = reversedSentence.reverse();
	//for (i = 0; i < newArray.length; i++);
	var joinnewArray = newArray.join("");

	console.log(joinnewArray);

};

letterReverse("Put Hans back on the line")


/*Round 6
Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
Reference: MDN: String.length
longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"*/

//this isn't working...not sure why not
function longest(sentence){

	var sentenceSplit = sentence; //split the sentence into an array
	//var longestWord;
	var longestWord = 0;//this will give me the number of the longest word - don't want that

	for (i = 0; i < sentenceSplit.length; i++){ //I know I need a for loop because I need to iterate thru the sentenceSplit array
 	

 		if (longestWord < sentenceSplit[i].length){//if while going through the loop if the sentenceSplit[i] is longer than the longestWord
 			longestWord = sentenceSplit[i].length; //then the longest word is equal to the sentenceSplit index number referenced on previous line - not sure if I'm explaining that right
 		}

 	}
 	console.log(longestWord)

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

/*Final Round


Final Round

Write a function, called repMaster, that accepts two arguments, input and a function. Input should be able to be used with the function. The function used as an argument must return a string. repMaster should take the result of the string, passed as an argument to the argument function, and return this result with ' proves that I am the rep MASTER!' concatenated to it.
repMaster("Never give your heart to a blockhead", wordReverse) # =>
"blockhead a to heart your give never proves that I am the rep MASTER!"
repMaster("I finished this practice", toUpperCase);
"I FINISHED THIS PRACTICE proves that I am the rep MASTER!"
Note that a function can be used as an argument for a function! Inside of the function, you just need to call it. Example:
function logSomething(string) {

  console.log(string);

}

function doSomethingWithFunctions(yourFunction) {

  // you 'call' yourFunction
  var someString = "hey, you're going to log me";
  return yourFunction(someString);

}

doSomethingWithFunctions(logSomething);*/

//-------------BONUS PROBLEMS -----------//


// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 256

/* your code starts here */

/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

/* your code starts here */

/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

/* your code starts here */

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
