let fs = require('fs')

fs.readFile("a.txt", "utf-8", (err, data) => {
    let strSplit = data.split(" ")
    // console.log(strSplit);
    let result = ""
    strSplit.forEach((data) => {
        if (data.length != 0) {
            result = result.concat(data).concat(" ")
        }
    })

    fs.truncate("a.txt" , 0 , () => { })

    fs.writeFile( "a.txt" , result , () => {
        console.log("File Clean Done")
        fs.readFile("a.txt" , "utf-8" , (err , data) => {
            console.log(data);
        })
    }  )

   
})