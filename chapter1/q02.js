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
function findReverse(from, to) {
  const containChar = (exp) => {
    const reg = /\+|\-|\*/;
    return reg.test(exp);
  };
  const isReverseOf = (num) => {
    if (typeof num !== "string") {
      num = num.toString();
    }
    return (exp) => {
      if (typeof exp !== "string") {
        exp = exp.toString();
      }
      if (exp.length !== num.length) return false;
      return exp.split("").reduce((prevBool, char, i) => {
        return prevBool && char === num[num.length - 1 - i];
      }, true);
    };
  };
  const collectResult = (bin = []) => {
    return (item) => (!item ? bin : (bin.push(item), collectResult(bin)));
  };
  let result = collectResult();
  const gather = (nums) => {
    if (!Array.isArray(nums)) {
      const reverseExps = makeExpForCalc(nums)
        .filter((exp) => containChar(exp))
        .filter((exp) => isReverseOf(nums)(eval(exp)));
      if (reverseExps && reverseExps.length > 0) {
        reverseExps.forEach((exp) => {
          result = result(`${nums}: ${eval(exp)} = ${exp}`);
        });
      } else {
        return;
      }
    } else {
      nums.forEach((exp) => gather(exp));
      return;
    }
  };
  const run = () => {
    for (let i = from; i < to; i++) {
      gather(i);
    }
  };
  run();
  return result();
}
function runQ02() {
  console.log(findReverse(10000, 100000));
}
runQ02();
