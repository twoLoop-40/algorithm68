function makeExpForCalc(num) {
  const changeToString = (num) =>
    typeof num === "string" ? num : num.toString();
  if (!num) {
    console.log("RETURN FOR NOTHING");
    return;
  }
  const addOperations = (exp) => {
    if (typeof exp === "string") {
      return [exp, "+" + exp, "*" + exp, "-" + exp];
    } else if (Array.isArray(exp)) {
      return exp.flatMap((exp) => addOperations(exp));
    }
  };
  const mathExp = (nums) => {
    if (nums.length <= 1) return nums;
    const head = nums[0];
    return addOperations(mathExp(nums.slice(1))).map((exp) => head + exp);
  };
  return mathExp(changeToString(num));
}

function runQ02() {
  console.log(makeExpForCalc(1321));
}
runQ02();
