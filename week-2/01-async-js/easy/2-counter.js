function timePrint(){
    let time= new Date()
    console.log(`${String(time.getHours()).padStart(2,"0")}:${String(time.getMinutes()).padStart(2,"0")}:${String(time.getSeconds()).padStart(2,"0")}`);
    setTimeout(timePrint ,1000)
}


// for(let i=0;i<10 ; i++){
//     setTimeout(timePrint , 1000)
// }


timePrint()