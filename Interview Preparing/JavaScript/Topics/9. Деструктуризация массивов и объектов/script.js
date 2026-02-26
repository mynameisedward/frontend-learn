// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor  