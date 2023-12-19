/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function createPromise(milliseconds) {
    let p1= new Promise( (resolve) => {
        setTimeout(resolve, milliseconds)
    })
    return p1
}

async function  main(milliseconds) {
    let result= await  createPromise(milliseconds)
    return result
}

function sleep(milliseconds) {
    let result= main(milliseconds)

    return result

       
}

module.exports = sleep;
