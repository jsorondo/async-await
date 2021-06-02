// Asynchronous Function returns random number between 1-10 in a new Promise
function getRandomNumber(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor((Math.random() * 10) + 1);
            console.log(num);
        }, 500)
    })   
}

// Async/Await Function
async function getNumNow(){
    await getRandomNumber();
}

// Calling function
getNumNow();