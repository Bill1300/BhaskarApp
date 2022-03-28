//Formatar texto de função matemática.
export const createShowBhaskaraFunction = (valA, valB, valC) => {
  let txtValA = Number(valA)
  let txtValB = Number(valB)
  let txtValC = Number(valC)
  
  //Ax²
  txtValA = valA + "𝑥²";
  if (valA === 0) {
    txtValA = "";
  }
  if (valA === 1) {
    txtValA = "𝑥²";
  }
  if (valA === -1) {
    txtValA = "-𝑥²";
  }

  //Bx
  txtValB = valB + "𝑥";
  if (valB > 0) {
    txtValB = "+" + valB + "𝑥";
  }
  if (valA === 0 && valB > 0) {
    txtValB = valB + "𝑥";
  }
  if (valB === 1) {
    txtValB = "+𝑥";
  }
  if (valB === -1) {
    txtValB = "-𝑥";
  }
  if (valB === 0) {
    txtValB = "";
  }

  //C
  txtValC = valC;
  if (valC > 0) {
    txtValC = "+" + valC;
  }
  if (valA === 0 && valB === 0 && valC > 0) {
    txtValC = valC;
  }
  if (valC === 0) {
    txtValC = "";
  }

  let textReturn = (txtValA + txtValB + txtValC).toString();
  return textReturn;
};
