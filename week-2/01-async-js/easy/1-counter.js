function timePrint(){
    let time= new Date()
    console.log(`${String(time.getHours()).padStart(2,"0")}:${String(time.getMinutes()).padStart(2,"0")}:${String(time.getSeconds()).padStart(2,"0")}`);
}

setInterval(timePrint , 1000)