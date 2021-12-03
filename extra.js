let dummy = prompt('Введите строку');

const extraFunc = function (d) {

    if (typeof d !== 'string') {
        alert('аргумент не строка');
        return;
    }

    d = d.trim();
    alert(d.length > 30 ? d.slice(0, 30) + '...' : d);
};

extraFunc(dummy);