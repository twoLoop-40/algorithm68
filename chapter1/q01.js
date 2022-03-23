function findSymmetricNumber(from = 10) {
  const transformNumberByDigit = (num) => [
    num.toString(2),
    num.toString(8),
    num.toString(),
  ];
  const checkSymmetry = (item = "") => {
    if (item.length == 0 || item.length == 1) return true;
    return (
      item[0] === item[item.length - 1] &&
      checkSymmetry(item.slice(1, item.length - 1))
    );
  };
  const symmetricInString = (numString) => {
    if (!Array.isArray(numString)) {
      return checkSymmetry(numString) ? true : false;
    } else {
      return numString.reduce(
        (prevBool, item) => prevBool && symmetricInString(item),
        true
      );
    }
  };
  if (symmetricInString(transformNumberByDigit(from))) {
    return from;
  } else {
    return findSymmetricNumber(from + 1);
  }
}

function runQ01() {
  console.log(findSymmetricNumber(10));
}

runQ01();
