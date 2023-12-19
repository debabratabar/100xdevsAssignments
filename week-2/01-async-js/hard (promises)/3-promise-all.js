/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    let p1 = new Promise( (resolve) => {
        setTimeout(resolve ,  t*1000)
    })
    return p1;
}

function wait2(t) {
    let p2 = new Promise( (resolve) => {
        setTimeout(resolve ,  t*1000)
    })
    return p2;
}

function wait3(t) {
    let p3 = new Promise( (resolve) => {
        setTimeout(resolve ,  t*1000)
    })
    return p3;
}

function calculateTime(t1, t2, t3) {
        let p1= wait1(t1)
        let p2 = wait2(t2)
        let p3 = wait3(t3)

        let promiceArr = [p1 , p2 , p3]

        let result =  Promise.all(promiceArr).catch( (err) => {
                console.log(err);
        })

        return  result
}

module.exports = calculateTime;
