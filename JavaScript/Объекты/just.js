// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",

  obj: {
    yo: 'yo',
    man: 'man'
  }
};

let newMenu = structuredClone(menu)

console.log(newMenu)