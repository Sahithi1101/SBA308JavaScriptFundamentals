/*
I. Variables & Datatypes

A. Q + A
How do we assign a value to a variable?
--by using the key word "let", "var", "const" with "=" sign operator
let x = 10

How do we change the value of a variable?
--"=" sign operator
x=10{
let X= 6}

How do we assign an existing variable to a new variable?

--with assignment operator (=)
x=10{
let X= 6}

Remind me, what are declare, assign, and define?
--when X=5 
declaring a variable called
assigning the value 5 to the variable

function add(x,y)
return x+y
this function is defined with function keyword


What is pseudocoding and why should you do it?
---it is simple and layman way of saying a logic of computer program, it does not have strict syntax
easy to understand, debugging and algorithm design

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
70% of the time thinking and 20% of time to type the code
*/


/*B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string 
"Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/

let firstVariable = "Hello World";
firstVariable = 15;
let secondVariable = firstVariable;
secondVariable = "Good Morning"
console.log(firstVariable);

let yourName = "Sahithi";
let greetings = "Hello, my name is "+ yourName;
console.log(greetings)
;


/*Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console */
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

// console.log(a __ b);
  console.log(a < b);

// console.log(c __ d);
  console.log(c > d);

// console.log('Name' __ 'Name');
  console.log('Name'==='Name');

//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true __ false);
console.log(true||false);
//   console.log(false __ false __ false __ false __ false __ true);
console.log(false && false && false && false && false || true);
//   console.log(false __ false)
console.log(false === false);
//   console.log(e ___ 'Kevin');
console.log(e ==='Kevin');
//   console.log(a __b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + b === c);
//   console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(a * a === d);
//   console.log(48 __ '48');
console.log(48!=='48');

/*
D. The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit
*/
let animal = ("Horse","cow");
let farmanimal;
if (animal== "cow"){
    console.log("moooo")
}
else console.log("Hey! You're not a cow.");

/*
E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, 
a message should print "Sorry, you're too young."
*/
let Driverage = (16,15,20,23);
if (Driverage>=16){
    console.log("Here are the keys!")
}
else console.log("Sorry, you're too young.");

/*
II. Loops
Remember: USE letwhen you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)
*/

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <=10; i++){
    console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <=400; i++){
    console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <=4000; i+=3){
    console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i = 2; i <102; i+=2){
    console.log(i);
}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 2; i <102; i+=2){
    console.log(i + " is an even number");
}

/*
C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
I found a 5. High five!
I found a 10. High five!

Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

For numbers divisible by both three and five, be sure your code prints both messages
*/
for (let i = 0; i<100; i++){
    if (i % 5 === 0 && i % 3===0){
        console.log("I found a "+i+". High five!");
        console.log("I found a "+i+". Three is a crowd");
    }
    else if (i%5===0){
        console.log("I found a "+i+". High five!");
    }else if (i%3===0){
        console.log("I found a "+i+". Three is a crowd");
    }
};
/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
*/
let bank_account=0;
for (let b = 0; b <= 10; b++){
        bank_account += b;
};
console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

for (let b = 0; b <= 100; b++){
    bank_account += b * 2;
};
console.log(bank_account);

/*
III. Arrays & Control flow
A. Talk about it:*/
// What are the things in an array called?
// --They are called "elements".

// Do Arrays guarantee those things will be in order?
// yes they will be in order as inserted.

// What real-life thing could you model with an array?
// days in a calender,
// emails received daily.

/*
B. Easy Does It
Create an array that contains three quotes and store it in a variable called quotes
*/
const quotes = ["Good Morning", "Have a nice day", "You're awesome"];
console.log(quotes);

/*
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]
*/
// How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

// Change the value of "Hello"to "World"

randomThings[2] ="World"
console.log(randomThings);

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

/*
D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
*/
// What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4]="Octocat"
console.log(ourClass);

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

/*
E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
Given the following array: const myArray = [5, 10, 500, 20]
*/

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
console.log(myArray);
myArray.push("Oxygen");
console.log(myArray);

// Remove the 5from the beginning of the array.
const newarray = myArray.shift();
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop(4);
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);
// the array was mutated by changing the original elements in array
// myArray.reverse() returned the reverse of the Array.

/*
F. Biggie Smalls
Create a variable that contains an integer.
*/
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
let Number =150;
if (Number<100){
    console.log("little number");
    Number++;
}else {
    console.log("big number");
    Number++
}

/*
G. Monkey in the Middle
Write an if ... else if ... elsestatement:
*/
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let number = 0
if (number<5)
{
    console.log("littele number");
} 
else if (number>10){
    console.log("big number");
}
else{
    console.log("monkey")
}

/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence 
//"Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,"raybans"); 
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5,1,"stained knit hat")
console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let first = thomsCloset[0];
let firstshirt = first.at(0);
console.log(firstshirt);

// In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1];
let firstpant = pants.at(1);
console.log(firstpant);

// Access one item from Thom's accessories array.
let accessories = thomsCloset[2];
let firstaccessories = accessories.at(1);
console.log(firstaccessories);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + " , " + thomsCloset[1][1] + " and " + thomsCloset[2][1] +"!");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset)

/*IV. Functions

A. printGreeting
Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated 
into the greeting?
Like so?
console.log(printGreeting("Slimer"));
=> Hello there, Slimer!
*/
const printGreeting = (name) => {
	return "Hello there, " + name + "!";
};
console.log(printGreeting("Slimer"));

/*B. printCool
Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
*/
const printCool = (name) => {
    return name + " is cool";
}
    console.log(printCool("Captain Reynolds"));

/*
C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
console.log(calculateCube(5));
=> 125
*/
const calculateCube = (singleNumber) => {
	return singleNumber * singleNumber * singleNumber;
};
console.log(calculateCube(5));

/*
D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, 
take a minute to test them with different values to make sure they behave the way you want.
console.log(isVowel("a"));
=> true
*/
const isVowel = (character) => {
	if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
		return true;
	} else {
		return false;
	}
};
console.log(isVowel("a"));
/*
E. getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number 
is the length of the corresponding string.
console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]
*/
const getTwoLengths = (string1, string2) => {
    const arrlength = [string1.length, string2.length];
    return arrlength;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

/*
Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers 
where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]
*/
const getMultipleLengths = (strArr) => {
	const multipleLengthArray = [];
	for (f = 0; f < strArr.length; f++){
		multipleLengthArray.push(strArr[f].length);
	};
	return multipleLengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

/*
G. maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, 
it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test 
it with larger values in each of the three locations.
console.log(maxOfThree(6, 9, 1));
*/
function maxOfThree(x,y,z){
    if ((x>y) && (x>z)){
        return x;
    }else if ((y>x) && (y>z)){
        return y;
    }else {
        return z;
    }
}
console.log(maxOfThree(842,2585664,116444664));

/*
H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. 
In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"
*/
const printLongestWord = (Array) => {
	let longestWord = '';
	for (let i = 0; i < Array.length; i++){
		if (Array[i].length > longestWord.length){
			longestWord = Array[i];
		}
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

/*Objects
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, 
and we want to store that user's data. The object data structure is a good way to organize the data from our user.
A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. 
Set the other values to whatever you would like.
*/
const user = {
    name: "Sahithi",
    email: "sahithim@gmail.com",
    age: 35,
    purchased: []
};
console.log(user);
/*B. Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
*/

const updateduser ={
    ...user,
    email: "school@gmail.com",
    age: user.age+1
};
console.log(updateduser);

/*
C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
*/
const userlocation ={
    ...user,
    location: "PA"
};
console.log(userlocation);

/*
D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.
*/
user.purchased.push("carbohydrates", "peace of mind","Merino jodhpurs");
console.log(user.purchased[2]);

/*
E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friendobject added to our user object.

Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
*/
user.friend={
    name:"Grace Hopper",
    age: 85,
    location: "TX",
    purchased: []
};
console.log(user.friend)
//Console.log just the friend's name
console.log(user.friend.name);
//Console.log just the friend's location
console.log(user.friend.location);
//CHANGE the friend's age to 55
const changeage = {
    age: 55 
};
console.log(changeage);
 //The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");
//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");
//Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

for (let i = 0; i<user.purchased.length; i++){
    console.log(user.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

/*
G. Functions can operate on objects
Write a single function updateUserthat takes no parameters. When the function is run, it should:
it should increment the user's age by 1

The function does not need a returnstatement, it will merely modify the user object.
*/
function updateuser(){
    user.age++;
};
// make the user's name uppercase
user.name.toUpperCase();
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, 
function oldAndLoud(person){
    person.age++;
    person.name.toUpperCase();
}
//make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
//Call your oldAndLoudfunction with useras the argument.
function oldAndLoud(user){

}
console.log(user);

/*Cat Combinator
1. Mama cat
Define an object called cat1 that contains the following properties:
name
breed
age (a number)
console.log the cat's age
console.log the cat's breed
*/
const cat1 ={
    name: "Push",
    breed: "Birman",
    age: 3
}
console.log(cat1.age);
console.log(cat1.breed);
/*
Papa cat
Define an object called cat2 that also contains the properties:
name
breed
age (a number)
*/
const cat2 ={
    name: "cocoo",
    breed: "Somali",
    age: 2
}
console.log(cat2.age);
console.log(cat2.breed);

// /*
// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// */
function combineCats(mama,papa){
    console.log(mama);
    console.log(papa);
}

// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// Make it so the combineCatsfunction will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// This is to demonstrate that a function can return an object

/*
4. Cat brain bender
If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
catCombinatorcan use itself as its own argument.
Take a second to stew on that . . .
What is the result of:
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .
The above console.log is two levels deep of combineCats.
Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:
*/
function combineCats(mama, papa) {
    console.log(mama);
    console.log(papa);
  }
  
// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
  function combineCats(cat1, cat2){
  console.log(combineCats(cat1, cat2));
}

  function combineCats(mama, papa) {
    return {
      name: mama.name + papa.name, 
      age: 1, 
      breed: mama.breed + "-" + papa.breed 
    };
  };

 
  let Cat1 = { name: "Joe", age: 19, breed: "Mog" };
  let Cat2 = { name: "Jam", age: 45, breed: "Siamese" };
  console.log(combineCats(Cat1, Cat2)); 
  
  
 //example
  let cat3 = { name: "Joe", age: 19, breed: "Mog" };
  let cat4 = { name: "Jam", age: 45, breed: "Siamese" };
  //three level deep
     console.log(
    combineCats(
      combineCats(combineCats(cat3, cat4), combineCats(cat3, cat4)),
      combineCats(combineCats(cat3, cat4), combineCats(cat3, cat4))
    )
  );

