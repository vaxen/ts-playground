//one example of generics are promises
const checkNumber = (a: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a >= 2) {
        resolve('Number selected is ' + a);
      } else {
        reject('Error number is < than 2');
      }
    }, 1500);
  });
};

checkNumber(2)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

checkNumber(1).then(
  (value) => {
    console.log('Resolved ' + value);
  },
  (error) => {
    console.log('Rejected: ' + error);
  }
);

let fnWaitASecond = function (secondsPassed) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      secondsPassed++;
      resolve(secondsPassed);
    }, 1000);
  });
};

fnWaitASecond(0)
  .then(fnWaitASecond) // Passes value automatically
  .then(function (seconds) {
    console.log('Promises: waited ' + seconds + ' seconds');
  });

Promise.all([checkNumber(1), checkNumber(2)]).then((value) => {
  //execute all promises and check the error in all of them
});

Promise.race([checkNumber(1), checkNumber(2)]).then((value) => {
  //execute all promises but return the faster
});
