const getData = () =>
  new Promise((resolve, reject) => {
    for (let i = 1; i < 25; i++) {
      if (i % 5 === 0) {
        resolve(i);
      }
    }
    reject("yes");
  });

getData()
  .then((value) =>
    console.log("The value when the promise is resolved is", value)
  )
  .catch((error) => console.log(error));
