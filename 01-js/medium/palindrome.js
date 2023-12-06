/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split(" ") // replaced space & punctual chars
   strArr= strArr.join("").split("") // creating char Arr 
  for ( let i=0,j=strArr.length-1;i<j ;i++,j--){
    if(strArr[i] != strArr[j]){
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
