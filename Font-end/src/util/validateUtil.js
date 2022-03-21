function isEmpty(params) {
    return params === null || params === '' || params === undefined;
}

function isEmail(params) {
    const regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regExp.test(params);
}

function isPhone(params) {
    const regExp = /^[^A-Za-z]*$/;
    return regExp.test(params);
}

function isZeroTen(number){
    if (number < 10){
        number = '0' + number;
    }

    return number;
}

const validate = {isEmpty, isEmail, isPhone, isZeroTen};
export default validate;
