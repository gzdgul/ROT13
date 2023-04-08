//ROT13
str = 'Hello World';
ROT13(str);

function ROT13 (str) {
    let arr = [...str];
    arr = arr.map((letter,index) => {
        let limit = letter === letter.toUpperCase() ? 78 : 110;
        let base10Code = str.charCodeAt(index); // decimal ASCII code
        let offset = (base10Code >= limit) ? (base10Code - 13) : (base10Code + 13); // offset
        return String.fromCharCode(offset); // converting decimal to ASCII // New Letter
    });
    return(arr).join('');
}

