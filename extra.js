let num = 266219;
let aNum = num.toString().split("").reduce((a, b) => a * b); // Превращаем в строку, сплитим, умножаем.
let deg = aNum ** 3; // Возводим в степень
console.log(deg.toString().slice(0, 2)) // Выводим только первые два числа