'use strict';

function fixMonth() {
    return function (input) {
        let newMonth;
        if (input === 'января') {
            newMonth = 'Январь';
        } else if (input === 'февраля') {
            newMonth = 'Февраль';
        } else if (input === 'марта') {
            newMonth = 'Март';
        } else if (input === 'апреля') {
            newMonth = 'Апрель';
        } else if (input === 'мая') {
            newMonth = 'Май';
        } else if (input === 'июня') {
            newMonth = 'Июнь';
        } else if (input === 'июля') {
            newMonth = 'Июль';
        } else if (input === 'августа') {
            newMonth = 'Август';
        } else if (input === 'сентября') {
            newMonth = 'Сентябрь';
        } else if (input === 'октября') {
            newMonth = 'Октябрь';
        } else if (input === 'ноября') {
            newMonth = 'Ноябрь';
        } else if (input === 'декабря') {
            newMonth = 'Декабрь';
        } else {
            newMonth = '';
        }
        return newMonth;
    }
}

export default fixMonth;