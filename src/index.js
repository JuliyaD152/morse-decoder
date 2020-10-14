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

function decode(expr) {
    return expr.split('**********').map(word => {
        let newMorseWord = '';
        for (let i = 0; i < word.length; i+=2){
            if( word[i] + word[i+1] === '10') newMorseWord += '.';
            if((word[i] + word[i+1]) === '11') newMorseWord += '-';
            if( ((i + 2)%10) == 0) newMorseWord +=' ';
        }
        newMorseWord = newMorseWord.split(' ').map( j => {
            return MORSE_TABLE[j];
        }).join('');
        return newMorseWord;
    }).join(' ');
}

module.exports = {
    decode
};