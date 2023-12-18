const { log } = require('console');
let fs = require('fs')
fs.readFile("a.txt" , "utf-8" , (err , data) =>{ // code to count the occurance of characters in a file 
    console.log("The content of the file is ");
    // console.log(data);
    let charCount =new Array(26).fill(0)
    data= data.toLowerCase()
    for ( let i=0;i<data.length;i++){
        charCount[data[i].charCodeAt(0)-97]++;
    }

    console.log("the charCount of the file is below");
    for ( let i=0;i<charCount.length;i++){
            if(charCount[i]!=0){
                console.log(`${String.fromCharCode(97+i)} : ${charCount[i]}`);
            }
    }
    
})