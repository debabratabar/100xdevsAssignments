// time format - HH:MM::SS (Eg. 13:45:23)
function timePrint(){
    let time= new Date()
    // console.log(`${String(time.getHours()).padStart(2,"0")}:${String(time.getMinutes()).padStart(2,"0")}:${String(time.getSeconds()).padStart(2,"0")}`);

    console.log(time.toLocaleTimeString('en-us' ,  { hour: "2-digit", minute: "2-digit", second : "2-digit" , hour12: false}));
}

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function timePrintAMPM(){
    let time= new Date()
console.log(time.toLocaleTimeString('default' ,  { hour: "2-digit", minute: "2-digit", second : "2-digit"}));
}

// setInterval(timePrint , 1000)
setInterval(timePrintAMPM , 1000)


// let today_date = new Date()

// console.log(today_date.toLocaleTimeString('default' ,  { hour: "2-digit", minute: "2-digit", second : "2-digit"}));