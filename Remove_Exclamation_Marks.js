function removeExclamationMarks(s) {
    let str = '';
    for(let el of s){
        if(el !== '!') str += el;
    }
    return str;
}


console.log(removeExclamationMarks('Hello World!'));
