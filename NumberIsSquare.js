// Cheking is the inpiut Number a 'perfect' square

const isSquare = inputNumber => inputNumber < 0 ? false : inputNumber === 0 ? true : inputNumber % (inputNumber ** 0.5) == 0 ? true : false;
