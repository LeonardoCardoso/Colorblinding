// Reverting Methods --- //

function revertProtanopia(document) {

}
function revertDeuteranopia(document) {

}
function revertTritanopia(document) {

}
function revertProtanomaly(document) {

}
function revertDeuteranomaly(document) {

}
function revertTritanomaly(document) {

}
function revertAchromatopsia(document) {

}
function revertAchromatomaly(document) {

}

function revertColors(document, type) {
    switch (type) {
        case 'protanopia':
            revertProtanopia(document);
            break;
        case 'deuteranopia':
            revertDeuteranopia(document);
            break;
        case 'tritanopia':
            revertTritanopia(document);
            break;
        case 'protanomaly':
            revertProtanomaly(document);
            break;
        case 'deuteranomaly':
            revertDeuteranomaly(document);
            break;
        case 'tritanomaly':
            revertTritanomaly(document);
            break;
        case 'achromatopsia':
            revertAchromatopsia(document);
            break;
        case 'achromatomaly':
            revertAchromatomaly(document);
            break;
        default:
            break;
    }
}

// --- //

// Changing Methods --- //

function changeToProtanopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToDeuteranopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToTritanopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToProtanomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToDeuteranomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToTritanomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToAchromatopsia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function changeToAchromatomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

// --- //

function invertingColors(document, type) {
    var css = 'html {-webkit-filter: invert(100%);' +
            '-moz-filter: invert(100%);' +
            '-o-filter: invert(100%);' +
            '-ms-filter: invert(100%); }',
        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    if (!window.counter) {
        window.counter = 1;
    } else {
        window.counter++;
        if (window.counter % 2 == 0) {
            var css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
        }
    }
    ;

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
};

var type = typeSelected.typeSelected;
switch (typeSelected.typeSelected) {
    case 'protanopia':
        changeToProtanopia(document, type);
        break;
    case 'deuteranopia':
        changeToDeuteranopia(document, type);
        break;
    case 'tritanopia':
        changeToTritanopia(document, type);
        break;
    case 'protanomaly':
        changeToProtanomaly(document, type);
        break;
    case 'deuteranomaly':
        changeToDeuteranomaly(document, type);
        break;
    case 'tritanomaly':
        changeToTritanomaly(document, type);
        break;
    case 'achromatopsia':
        changeToAchromatopsia(document, type);
        break;
    case 'achromatomaly':
        changeToAchromatomaly(document, type);
        break;
    default:
        invertingColors(document, type);
        break;
}


