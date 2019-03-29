function comp(array1, array2){
    if(array1 === null || array2 === null) return false;
    console.log(array1.sort(function(a, b){return a-b}));
    console.log(array2.sort(function(a, b){return a-b}));

    for(let i = 0; i <= array1.length - 1; i++){
        console.log(array1[i]*array1[i]);
        console.log(array2[i]);
        if(array1[i]*array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}
let  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);