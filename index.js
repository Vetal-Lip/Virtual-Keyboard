let keyboardData = {
    keyValue: {
        ru: [
            ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
            ['CapsLk', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
            ['ShiftL', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '	&uarr;', 'ShiftR'],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '&larr;', '	&darr;', '&rarr;']
        ],
        eng: [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
            ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
            ["CapsLk", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
            ["ShiftL", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "	&uarr;", "ShiftR"],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '&larr;', '	&darr;', '&rarr;']
        ],
        shiftRu: [
            ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace'],
            ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", '/'],
            ['CapsLk', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter'],
            ['ShiftL', "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ',', '	&uarr;', 'ShiftR'],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '&larr;', '	&darr;', '&rarr;']
        ],
        shiftEng: [
            ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
            ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
            ["CapsLk", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter"],
            ["ShiftL", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "	&uarr;", "ShiftR"],
            ['CtrlL', 'Win', 'AltL', 'Space', 'AltR', 'CtrlR', '&larr;', '	&darr;', '&rarr;']
        ]
    },

    keyCode: [
        ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete"],
        ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
        ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
        ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
        ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"]
    ],

    toggle: true,
    isCapsLock: false,

}

let keyboardSection = document.createElement('section');
keyboardSection.classList.add('keyboardSection');

let textareaField = document.createElement('textarea');
textareaField.classList.add('textareaField');
textareaField.setAttribute('type', 'text');

let keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboardBox');

let divDescription = document.createElement('div');
divDescription.classList.add('description');
divDescription.innerText = `Change language: Press ShiftLeft+AltLeft 
OS: Windows`


document.body.prepend(keyboardSection);
keyboardSection.append(textareaField);
keyboardSection.append(keyboardBox);
keyboardSection.append(divDescription);



let keyboardArr = [];


function addButton(array, num) {
    return array.map((el, index) => (`<button class='button' id=${keyboardData.keyCode[num][index]}>${el}</button>`)).join('');
}

let createKeyboard = (array) => {
    keyboardArr = array.map((el, index) => `<div class = 'line line__${index + 1}'>${addButton(el, index)}</div>`)
    keyboardArr.forEach(el => keyboardBox.innerHTML += el);
}

// createKeyboard(keyboardData.keyValue.ru)

// ===================  localstorage ===========================
localStorage.getItem("language") === "ru" ? createKeyboard(keyboardData.keyValue.ru) : createKeyboard(keyboardData.keyValue.eng);

let changeLanguage = (arr) => {
    keyboardBox.innerHTML = "";
    createKeyboard(arr);
    return { ...keyboardData, toggle: keyboardData.toggle = !keyboardData.toggle }
}

let pressCapsLock = (arr) => {
    keyboardBox.innerHTML = "";
    createKeyboard(arr);
    return { ...keyboardData, isCapsLock: keyboardData.isCapsLock = !keyboardData.isCapsLock }
}

let addActiveClassButton = (e) => {
    let activeButton = document.getElementById(e)
    activeButton.classList.add('active')
}

let removeActiveClassButton = (e) => {
    let activeButton = document.getElementById(e);
    setTimeout(function () {
        activeButton.classList.remove('active')
    }, 300);
}

let changeLetterSize = (arr) => {
    keyboardBox.innerHTML = "";
    createKeyboard(arr);
}

let addValueInTextarea = (value) => {
    switch (value) {
        case "Tab":
        case "TAB":
            value = "    ";
            break;
        case "Space":
            value = " ";
            break;
        case "Control":
        case "Alt":
        case "Shift":
        case "AltGraph":
        case "ShiftL":
        case "CtrlL":
        case "AltL":
        case "Win":
        case "Meta":
        case "AltR":
        case "CtrlR":
        case "ShiftR":
        case "CapsLock":
        case "CapsLk":
            value = "";
            break;
        case "Enter":
            value = "\n"
            break;
        case "Backspace":
            value = textareaField.innerHTML.slice(0, -1)
            textareaField.innerHTML = ""
            break;
        case "ArrowUp":
            value = "&uarr;"
            break;
        case "ArrowLeft":
            value = "&larr;"
            break;
        case "ArrowDown":
            value = "&darr;"
            break;
        case "ArrowRight":
            value = "&rarr;"
            break;

        default:
            value = value;
    }

    textareaField.innerHTML += value;
}

// ======================== Keyboard EVENT =============================
document.addEventListener('keydown', function (event) {
    addActiveClassButton(event.code)

    event.stopPropagation();
    event.preventDefault();

    if (event.repeat) return
    if (event.code === 'ShiftLeft') {
        addActiveClassButton(event.code)

        keyboardData.toggle == true ? changeLetterSize(keyboardData.keyValue.shiftRu) : changeLetterSize(keyboardData.keyValue.shiftEng);

        document.addEventListener('keyup', function (event) {
            removeActiveClassButton(event.code)
            if (event.code == 'AltLeft') {
                if (keyboardData.toggle == true) {
                    changeLanguage(keyboardData.keyValue.eng);
                    localStorage.setItem("language", "eng");
                } else {
                    changeLanguage(keyboardData.keyValue.ru);
                    localStorage.setItem("language", "ru");
                }
            }
            console.log(keyboardData.toggle)
        })
    }

    if (event.code == 'CapsLock') {
        addActiveClassButton(event.code);
        if (keyboardData.toggle == true) {
            keyboardData.isCapsLock == true ? pressCapsLock(keyboardData.keyValue.shiftRu) : pressCapsLock(keyboardData.keyValue.ru);
        } else {
            keyboardData.isCapsLock == true ? pressCapsLock(keyboardData.keyValue.shiftEng) : pressCapsLock(keyboardData.keyValue.eng);
        }
    }
})

document.addEventListener('keyup', function (event) {
    removeActiveClassButton(event.code)
    console.log(event)
    addValueInTextarea(event.key)

    if (event.code == "ShiftLeft") {
        keyboardData.toggle == true ? changeLetterSize(keyboardData.keyValue.ru) : changeLetterSize(keyboardData.keyValue.eng)
    }

})
// =================================================================

// ==================== Mouse EVENT ==============================
document.addEventListener('click', function (event) {
    console.log(event.target.innerText)
    addActiveClassButton(event.target.id)
    event.stopPropagation();
    event.preventDefault();



})
document.addEventListener('click', function (event) {
    removeActiveClassButton(event.target.id)
    addValueInTextarea(event.target.innerText)

})
// ===============================================================