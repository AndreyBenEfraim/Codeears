function nbYear(p0, percent, aug, p) {
    percent = percent / 100;
    let count = 0;
    while(p0 < p){
        count ++;
        p0 = p0 + (p0 * percent + aug);
    }
    return count ;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));  // -> 10