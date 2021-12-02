// Вариант через многомерный массив

let Day = (dayNumber, lang) => ({
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
})[lang][dayNumber % 7];
console.log(Day(3, 'ru'));
console.log(Day(6, 'en'));

// Вариант через условную конструкцию if

let language = 'ru';
let dayArr;
if (language == 'ru') {
    dayArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
} else if (language == 'en') {
    dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(dayArr)

// Вариант через switch-case

let switchLang = 'en';
let switchArr;
switch (switchLang) {
    case 'ru':
        switchArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        break;
    case 'en':
        switchArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
}
console.log(switchArr);

// Задание №2
let namePerson = 'Артем';
let personStatus = namePerson == 'Артем' ? 'Директор' : namePerson == 'Александр' ? 'Преподаватель' : 'Студент';
console.log(personStatus);