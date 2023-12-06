/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let strArr = str.toLowerCase().split("")
    let countVowel=0

    strArr.forEach( (ele) => {
      if ( ele==='a' || ele==='e' || ele==='i' || ele==='o' || ele==='u'){
        countVowel++
      }

    } )

    return countVowel
}

module.exports = countVowels;