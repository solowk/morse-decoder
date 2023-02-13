const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function prepareDecodeTable () {
    let decodeTable = {};
    for (const line in MORSE_TABLE) {
        let key = line.replaceAll('.','10').replaceAll('-','11').padStart(10,'0');
        decodeTable[key] = MORSE_TABLE[line];
    }
    decodeTable['**********'] = ' ';
    return decodeTable;
}

const decodeTable = prepareDecodeTable();

function decode(expr) {
    // write your solution here
    let result = '';
    expr.match(new RegExp('.{10}', 'g')).forEach(element => {
        result += decodeTable[element];
    });
    return result;
}

module.exports = {
    decode
}