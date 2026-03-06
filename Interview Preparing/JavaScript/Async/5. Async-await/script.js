function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Жду...");
  await delay(1000); // Ожидаем 1 секунду
  console.log("Привет после 1 секунды!");
}


greet();

setTimeout(() => {
    console.log('yoyoyo')
}, 500)