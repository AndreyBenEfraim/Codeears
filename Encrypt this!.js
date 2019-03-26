function encryptThis (text) {
    let arr = text.split(' ');

    for(let i= 0;i<arr.length;i++){
        if(arr[i].length < 3)
            arr[i] =  arr[i].replace(arr[i][0],arr[i].charCodeAt(0));

        else {
            arr[i] = arr[i].slice(0,1) + arr[i].slice(-1) + arr[i].slice(2,-1) + arr[i].slice(1,2);
            arr[i] =  arr[i].replace(arr[i][0],arr[i].charCodeAt(0));
        }
        console.log(arr[i]);
    }
    return arr.join(' ');
}

console.log(encryptThis("A wise old owl lived in an oak"));
