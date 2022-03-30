// THEME
const circleCheck = document.querySelector('.circle-check');
const checkSelectTheme = document.querySelectorAll('.check-select-theme');
checkSelectTheme.forEach(item => {
    item.addEventListener('click', (e) => {
        // target id
        const idTheme = e.target.id;
        // const idTheme = item.getAttribute('id');
        console.log(idTheme);
        if (idTheme === 'theme-1') {
            circleCheck.style.left = '3.5px';
            changeTheme(theme1);
            header.style.color = '#fff';
            themeBlock.style.color = '#fff';
            valueScreen.style.color = '#fff';
        } else if (idTheme === 'theme-2') {
            circleCheck.style.left = '21.5px';
            changeTheme(theme2);
        } else {
            circleCheck.style.left = '40px';
            changeTheme(theme3);
            keyEqual.style.color = 'hsl(198, 20%, 13%)';
        }
    })
})

const theme1 = {
    mainBackground: 'hsl(222, 26%, 31%)',
    keypadBackgroundT: 'hsl(223, 31%, 20%)',
    screenBackground: 'hsl(224, 36%, 15%)',
    // DEL, Reset btn
    keyBackgroundDR: 'hsl(225, 21%, 49%)',
    keyshadowDS: 'hsl(224, 28%, 35%)',
    // Equal, Toggle btn
    keyBackgroundET: 'hsl(6, 63%, 50%)',
    keyshadowET: 'hsl(6, 70%, 34%)',
    // Number btn
    keyBackgroundNumber: 'hsl(30, 25%, 89%)',
    keyshadowNumber: 'hsl(28, 16%, 65%)',
    //text btn
    keyColorTextNumber: 'hsl(221, 14%, 31%)',
    keyColorTextOperator: '#fff',
}

const theme2 = {
    mainBackground: 'hsl(0, 0%, 90%)',
    keypadBackgroundT: 'hsl(0, 5%, 81%)',
    screenBackground: 'hsl(0, 0%, 93%)',
    // DEL, Reset btn
    keyBackgroundDR: 'hsl(185, 42%, 37%)',
    keyshadowDS: 'hsl(185, 58%, 25%)',
    // Equal, Toggle btn
    keyBackgroundET: 'hsl(25, 98%, 40%)',
    keyshadowET: 'hsl(25, 99%, 27%)',
    // Number btn
    keyBackgroundNumber: 'hsl(45, 7%, 89%)',
    keyshadowNumber: 'hsl(35, 11%, 61%)',
    //text btn
    keyColorTextNumber: 'hsl(60, 10%, 19%)',
    keyColorTextOperator: '#fff',
}

const theme3 = {
    mainBackground: 'hsl(268, 75%, 9%)',
    keypadBackgroundT: 'hsl(268, 71%, 12%)',
    screenBackground: 'hsl(268, 71%, 12%)',
    // DEL, Reset btn
    keyBackgroundDR: 'hsl(281, 89%, 26%)',
    keyshadowDS: 'hsl(285, 91%, 52%)',
    // Equal, Toggle btn
    keyBackgroundET: 'hsl(176, 100%, 44%)',
    keyshadowET: 'hsl(177, 92%, 70%)',
    // Number btn
    keyBackgroundNumber: 'hsl(268, 47%, 21%)',
    keyshadowNumber: 'hsl(290, 70%, 36%)',
    //text btn
    keyColorTextNumber: 'hsl(52, 100%, 62%)',
    keyColorTextOperator: '#fff',
}

// El change color
const selectThemeBox = document.querySelector('.select-theme'); 
const keyNumber = document.querySelectorAll('.keypad-button');
const keyDel = document.querySelector('.keypad-del');
const keyReset = document.querySelector('.keypad-reset');
const keyEqual = document.querySelector('.keypad-equals');
const mainBackground = document.querySelector('.container');
const screen = document.querySelector('.display-value');
const keypad = document.querySelector('.keypad')
const header = document.querySelector('.header');
const themeBlock = document.querySelector('.theme');

const changeTheme = (theme) => {
    mainBackground.style.backgroundColor = theme.mainBackground;
    circleCheck.style.backgroundColor = theme.keyBackgroundET;
    selectThemeBox.style.backgroundColor = theme.keypadBackgroundT;
    screen.style.backgroundColor = theme.screenBackground;
    keypad.style.backgroundColor = theme.keypadBackgroundT;
    header.style.color = theme.keyColorTextNumber;
    themeBlock.style.color = theme.keyColorTextNumber;
    valueScreen.style.color = theme.keyColorTextNumber;
    keyNumber.forEach(item => {
        item.style.boxShadow = `0 3px 0 ${theme.keyshadowNumber}`;
        item.style.backgroundColor = theme.keyBackgroundNumber;
        item.style.color = theme.keyColorTextNumber;
    })
    keyDel.style.backgroundColor = theme.keyBackgroundDR;
    keyDel.style.color = theme.keyColorTextOperator;
    keyDel.style.boxShadow = `0 3px 0 ${theme.keyshadowDS}`;
    keyReset.style.backgroundColor = theme.keyBackgroundDR;
    keyReset.style.color = theme.keyColorTextOperator;
    keyReset.style.boxShadow = `0 3px 0 ${theme.keyshadowDS}`;
    keyEqual.style.backgroundColor = theme.keyBackgroundET;
    keyEqual.style.color = theme.keyColorTextOperator;
    keyEqual.style.boxShadow = `0 3px 0 ${theme.keyshadowET}`;
}

// Calculate
const valueScreen = document.querySelector('.display-value-inner-text');
let value='';

// get keypad
const keyPad = document.querySelectorAll('.keypad-button');
keyPad.forEach( (keypad) => {
    keypad.addEventListener('click', (e) => {
        const key = e.target.innerText;
        if (key === '=') {
            // function eval: caculate the value
            value = eval(value);
        } else if (key === 'RESET') {
            value = '';
        } else if (key === 'DEL') {
            value = value.slice(0, -1);
        } else {
            addValue(key);
        }
        displayValue(value);
        console.log(value.length);
    })
})

const addValue = (key) => {
    if ( value.length < 25) {
        value += key;
    } else {
        value = value;
        alert('Too many digits');
    }
}

// press keyboard
document.addEventListener('keydown', (e) => {
    // key = 1 => value = 1
    switch (e.keyCode) {
        case 49:
            addValue('1');
            break;
        case 50:
            addValue('2');
            break;
        case 51:
            addValue('3');
            break;
        case 52:
            addValue('4');
            break;
        case 53:
            addValue('5');
            break;
        case 54:
            addValue('6');
            break;
        case 55:
            addValue('7');
            break;
        case 56:
            addValue('8');
            break;
        case 57:
            addValue('9');
            break;
        case 48:
            addValue('0');
            break;
        case 8:
            value = value.slice(0, -1);
            break;
        case 13:
            value = eval(value);
            break;
        default:
            break;
    }
    displayValue(value);
})


const displayValue = (value) => {
    if (value.length > 16) {
        valueScreen.style.fontSize = '20px';
    } else if (value.length > 11) {
        valueScreen.style.fontSize = '30px';
    } else {
        valueScreen.style.fontSize = '40px';
    }
    valueScreen.innerText = value;
}