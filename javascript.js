const triangleLoop = () => {
    const length = 7;
    let traingleResult = "";
    for (let i = 0; i < length; i++){
        traingleResult += "#";
        console.log(traingleResult);
    };
};

const FizzBuzzMath = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
};