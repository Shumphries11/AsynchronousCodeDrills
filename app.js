let message = (string) => {
    console.log(string);
}

message('Hello World!');

setTimeout(() => {
    message('Hello World!');
}, 2000);

let getWords = (word) => {
    console.log(word);
    setTimeout(() => {
        console.log(word)
    }, 3000);
    setTimeout(() => {
        console.log(word)
    }, 2000);
    setTimeout(() => {
        console.log(word)
    }, 2001);
}
getWords('Hello');

let done = () => {
    console.log("Job's done!");
}

let countdown = (num, callback) => {
    setTimeout(() => {
        if(num > 0) {
            console.log(num)
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);  
}

countdown(20, done);

let lunchTime = false;

let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let lunchObj = {
                lunch: "Pizza",
                drink: "Water"
            };
            resolve(lunchObj);
        } else {
            let err = new Error("It's not lunch time");
            reject(err);
        }
    })
}

orderMeSomeFood()
.then((lunch) => {
    console.log(lunch);
}).catch((err) => {
    console.log(err);
});