const triangleLoop = () => {
    const length = 7;
    let traingleResult = "";
    for (let i = 0; i < length; i++){
        traingleResult += "#";
        console.log(traingleResult);
    };
};

const FizzBuzzMath = () => {
  for (let i = 1; i <= 100; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

const Chessboard = () => {
  let size = 8;

  let board = "";

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";

  }
  console.log(board);

};