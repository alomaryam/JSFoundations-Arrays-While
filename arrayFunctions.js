/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */


let isArrayLengthOdd = (numbers) => {
  if ((numbers.length%2) === 1){
    return true;
  }{
    return false;
  }
  };

  console.log(isArrayLengthOdd([1,2,3,4]));
  console.log(isArrayLengthOdd([1,2,3]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
let isArrayLengthEven = (numbers) => {
  if ((numbers.length%2) === 0){
    return true;
  }{
    return false;
  }
  };

  console.log(isArrayLengthEven([1,2,3,4]));
  console.log(isArrayLengthEven([1,2,3]));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */


let addLailaToArray = (instructors) => {
  instructors.push("Laila");
  return instructors;
};

console.log(addLailaToArray(["Mishary", "Hassan"]));




/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

let teams = ["Brazil","Germany","Italy"];

let eliminateTeam = (teams) => {
let removedteam = teams.pop("Italy");
return removedteam;
};
console.log(eliminateTeam(teams));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

 
let secondHalfOfArrayIfItIsEven = (fruits) => {
 if (fruits.length%2 === 0){
    return fruits.slice(fruits.length/2);
  }
  {
    return [];
  }
};
console.log(secondHalfOfArrayIfItIsEven (["apple","orange","banana","kiwi","blueberry"]));
console.log(secondHalfOfArrayIfItIsEven (["apple","orange","banana","kiwi"]));
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */

//let youGottaCalmDown = (shout) => {

  //if (shout.endsWith("!") === true) {
    //let x = shout.indexOf("!");
    //return console.log(`${shout.slice(0,x)}!`);
  //}
  //{
    //return console.log(shout);
  //}
//};

let youGottaCalmDown = (shout) => {
while (shout.endsWith("!!")){
  shout = shout.slice(0,-1);
}{
return shout;
}
};


console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
