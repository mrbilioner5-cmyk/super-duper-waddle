
const name = "Даниэл";
const age = 17;
const isStudent = true;

const emptyValue = null;
let undefinedValue;

// Переменные
console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Студент:", isStudent);
console.log("Пустое значение:", emptyValue);
console.log("Неопределённое значение:", undefinedValue);

// Типы данных
console.log("Тип имени:", typeof name);
console.log("Тип возраста:", typeof age);
console.log("Тип студента:", typeof isStudent);
console.log("Тип null:", typeof emptyValue);
console.log("Тип undefined:", typeof undefinedValue);

// Объект person
const person = {
    name: "Даниэл",
    age: 17,
    isStudent: true
};

console.log(
    `Меня зовут ${person.name}, мне ${person.age} лет. Студент: ${person.isStudent}`
);

// Массив из 5 любимых игр
const favoriteGames = [
    "Mobile Legends",
    "Chess.com",
    "Minecraft",
    "GTA V",
    "Counter-Strike 2"
];

console.log("Мои любимые игры:", favoriteGames);
