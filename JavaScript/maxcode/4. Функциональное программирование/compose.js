function compose(...fns) {
  if (fns.length === 0) {
    return (x) => x;
  }

  return fns.reduceRight((prevFn, nextFn) => {
    return (x) => nextFn(prevFn(x));
  });
}

// можем работать с compose вот так

const double = (x) => x * 2;
const cube = (x) => x ** 3;
const inc = (x) => x + 1;

const foo = compose(double, cube, inc);

console.log(foo(0));
console.log(foo(1));
console.log(foo(2));
