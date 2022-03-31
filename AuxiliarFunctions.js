//Formatar texto de função matemática (BhaskaraFunction).
export const createShowBhaskaraFunction = (valA, valB, valC) => {
  let txtValA = Number(valA);
  let txtValB = Number(valB);
  let txtValC = Number(valC);

  //Ax²
  txtValA = valA + "𝑥²";
  if (valA == 0) {
    txtValA = "";
  }
  if (valA == 1) {
    txtValA = "𝑥²";
  }
  if (valA == -1) {
    txtValA = "-𝑥²";
  }

  //Bx
  txtValB = valB + "𝑥";
  if (valB > 0) {
    txtValB = "+" + valB + "𝑥";
  }
  if (valA == 0 && valB > 0) {
    txtValB = valB + "𝑥";
  }
  if (valB == 1) {
    txtValB = "+𝑥";
  }
  if (valB == -1) {
    txtValB = "-𝑥";
  }
  if (valB == 0) {
    txtValB = "";
  }

  //C
  txtValC = valC;
  if (valC > 0) {
    txtValC = "+" + valC;
  }
  if (valA == 0 && valB == 0 && valC > 0) {
    txtValC = valC;
  }
  if (valC == 0) {
    txtValC = "";
  }

  let textReturn = (txtValA + txtValB + txtValC).toString();
  return textReturn;
};

//Formatar texto de função matemática (MathFunction).
export const createShowFunctionMath = (valA, valB, operation) => {
  let txtValA = Number(valA);
  let txtValB = Number(valB);

  //Ax
  txtValA = valA + "𝑥";
  if (valA > 0) {
    txtValA = valA + "𝑥";
  }
  if (valA == 0 && valA > 0) {
    txtValA = valA + "𝑥";
  }
  if (valA == 1) {
    txtValA = "+𝑥";
  }
  if (valA == -1) {
    txtValA = "-𝑥";
  }
  if (valA == 0) {
    txtValA = "";
  }

  //B
  txtValB = valB;
  if (valB < 0) {
    txtValB = "(" + valB + ")";
  }

  let txtOperation;
  if (operation == 1) {
    txtOperation = "+";
  }
  if (operation == 2) {
    txtOperation = "-";
  }
  if (operation == 3) {
    txtOperation = "×";
  }
  if (operation == 4) {
    txtOperation = "÷";
  }

  let textReturn = (txtValA + " " + txtOperation + " " + txtValB).toString();
  return textReturn;
};
