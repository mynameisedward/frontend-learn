async function foo() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

console.log("3");
foo();
console.log("4");


// Результат: 3, 1, 4, 2

// Разбор:

// 1. console.log("3") — синхронный код
// 2. Вызов foo(): console.log("1") выполняется синхронно
// 3. await Promise.resolve() приостанавливает foo. Все, что после await, становится микротаской
// 4. console.log("4") — синхронный код продолжается
// 5. Call Stack пуст — выполняется микротаска: console.log("2")

// Ключевой момент: await не блокирует основной поток. Он "разрезает" функцию на две части: до await (синхронно) и после await (микротаска).

