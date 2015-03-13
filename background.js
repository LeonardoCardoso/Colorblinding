// --- Protanopia --- //

function changeToProtanopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertProtanopia(document) {

}

// ------ //


// --- Deuteranopia --- //

function changeToDeuteranopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertDeuteranopia(document) {

}

// ------ //


// --- Tritanopia --- //

function changeToTritanopia(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertTritanopia(document) {

}

// ------ //


// --- Protanomaly --- //

function changeToProtanomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertProtanomaly(document) {

}

// ------ //


// --- Deuteranomaly --- //

function changeToDeuteranomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}
function revertDeuteranomaly(document) {

}

// ------ //


// --- Tritanomaly --- //

function changeToTritanomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertTritanomaly(document) {

}

// ------ //


// --- Achromatopsia --- //

function changeToAchromatopsia(document, type) {
    revertColors(type);

    var css = 'html {-webkit-filter: grayscale(100%);' +
        '-moz-filter: grayscale(100%);' +
        '-o-filter: grayscale(100%);' +
        '-ms-filter: grayscale(100%); }';

    applyingStyle(document, css);
}

function revertAchromatopsia(document) {
    var css = 'html {-webkit-filter: grayscale(0%); ' +
        '-moz-filter: grayscale(0%); ' +
        '-o-filter: grayscale(0%); ' +
        '-ms-filter: grayscale(0%); }';

    applyingStyle(document, css);
}

// ------ //


// --- Achromatonomaly --- //

function changeToAchromatomaly(document, type) {
    revertColors(type);

    invertingColors(document, type);
}

function revertAchromatomaly(document) {

}

// ------ //

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

    applyingStyle(document, css);
};


// --- Changing --- //

function changeColors(type) {
    switch (type) {
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
}

// ------ //


// --- Reverting --- //

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

// ------ //

// --- Applying Style --- //

function applyingStyle(document, css) {

    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

// ------ //

changeColors(typeSelected.typeSelected);