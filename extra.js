let dummy = prompt('Введите строку');

isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);

const extraFunc = function (d) {

    do {
            alert('Не строка';
        } while (isNumber(dummy));

    d = d.trim();
    alert(d.length > 30 ? d.slice(0, 30) + '...' : d);
};

extraFunc(dummy);
