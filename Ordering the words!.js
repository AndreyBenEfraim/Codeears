function orderWord(s){
    if(s === null || s === '') return 'Invalid String!';
    return s.split('').sort().join('');
}
console.log(orderWord("completesolution"));