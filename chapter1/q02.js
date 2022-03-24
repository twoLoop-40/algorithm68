function makeExpForCalc(num) {
  const addOp = (num) => {
    if (num.length <= 1) return num;
  };
  const changeToString = (num) =>
    typeof num === "string" ? num : num.toString();
  if (!Array.isArray(num)) {
    num = changeToString(num);
    return addOp(num);
  } else {
    return num.map((numStr) => makeExpForCalc(numStr)).flat();
  }
}
