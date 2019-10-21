function wrap(parFunc) {
  let errorOccured = false;
  let wrapped = function(d) {
    try {
      if (!errorOccured) {
        result = parFunc(d);
        return result;
      } else {
        return null;
      }
    } catch {
      errorOccured = true;
      return null;
    }
  };
  return wrapped;
}

wrap(function() {});

let count = 0;
const countThenThrow = () => {
  if (++count === 3) {
    throw new Error("Called too many times");
  }
  return true;
};

const wrappedCount = wrap(countThenThrow);

const throwOnGross = food => {
  if (food === "peach") {
    throw new Error(`${food} is gross`);
  }
  return `${food} is yummy`;
};

const wrappedGross = wrap(throwOnGross);

console.log(wrappedCount()); // true
console.log(wrappedCount()); // true
console.log(wrappedCount()); // null
console.log(wrappedCount()); // null

console.log(wrappedGross("apple")); // "apple is yummy"
console.log(wrappedGross("banana")); // "banana is yummy"
console.log(wrappedGross("peach")); // null
console.log(wrappedGross("apple")); // null
