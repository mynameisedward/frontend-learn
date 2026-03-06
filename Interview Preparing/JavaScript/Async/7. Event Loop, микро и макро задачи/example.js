console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => {
  console.log("4");
  setTimeout(() => console.log("5"), 0);
});

setTimeout(() => console.log("6"), 0);

Promise.resolve().then(() => console.log("7"));

console.log("8");

 


// 1 8 4 7 2 3 6 5

// 1 8 4 7 2 3 6 5