const { log } = require('console');
let fs  = require('fs')

fs.readFile("a.txt" , "utf-8" , (err,data) => {
    // console.log("the content of the file is below:");
    // console.log(data);
    data= data+"Copiright Added"

    fs.writeFile("a.txt" ,data , (err) => {  // written into file using writeFile( )

    })

})

fs.readFile("a.txt" , "utf-8" , (err ,data) =>   {
        console.log(`${data} , 1st call `);
})