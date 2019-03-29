function XO(str) {
    let xsum =0;
    let osum =0;
    for(let i = 0 ; i < str.length ;i++){
        switch(str[i].toLowerCase()){
            case 'x':
                xsum ++ ;
                break;
            case 'o':
                osum ++ ;
                break;
        }
    }
     return  (xsum === osum);
}

console.log(XO("zzzxoxz"));