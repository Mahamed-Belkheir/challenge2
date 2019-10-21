// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/

//function makeComputer returns an object with properties taken from the function parameters

function makeComputer(type, color, weight) {
  return {
  	type: type,
  	color: color,
  	weight: weight
  };
}

//array computers contains two elements, which are the returned values from calling makeComputer function twice
var computers = [
	makeComputer("laptop", "spacegrey", 3.2),
	makeComputer("desktop", "red", 6.4)
]

// Write a function displayComputer that can be used to display one computer.


//print the properties of the computer object using template literal string, using a line break after each element;
function displayComputer(computer) {
  console.log(`type: ${computer.type}\ncolor: ${computer.color}\nweight: ${computer.weight}`)
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

//map is the most fitting helper function here because we want to return the new array
//using an anonymous function that returns the inputed string as the uppercase version using
//the String.toUpperCase function

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings, function(string){
  	return string.toUpperCase();
  })
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

//using filter function to pick the objects that satisfy our predicate of population property > 500M

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects, function(country){
  	return country.population> 500000000
  })
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/

//using map to return a new array, including all the elements of number divided by two

function halveAll(numbers) {
  return map(numbers, function(num){
  	return num/2;
  })
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/

// using map function, we take each property and return it to the newly created array built into the map function
function values(obj) {
  return map(obj, function(property){
  	return property
  })
}

//Good Luck :))
