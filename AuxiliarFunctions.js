//Formatar texto de função matemática.
export function createShowBhaskaraFunction(valA, valB, valC) {
  let txtValA, txtValB, txtValC;
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
  return textReturn
};
