function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      // вызываем функцию
      return func.apply(this, args);
    } else {
      // возвращаем новую функцию
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(5)(4)(3));
