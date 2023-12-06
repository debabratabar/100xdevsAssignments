/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


// let dateTime = new Date()

// let initial_time= dateTime.getTime()

// let sum =0
// for(let i=0;i<10000000000;i++){
//     sum+=i
// }

// let end_time = dateTime.getTime()

// let total_time_taken = end_time-initial_time;

// console.log(`Total time taken ${total_time_taken}`);

// creating stopwatch  in terminal


function printTime() {
    let time= new Date()
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}

setInterval(printTime, 1000)