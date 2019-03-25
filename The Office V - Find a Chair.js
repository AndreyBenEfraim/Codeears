function meeting(x, need){
    if(!need) return 'Game On';

    const res =[];
    let count =0;
    let dif =0;

    for(let i = 0 ;i < x.length ;i++){
        dif = x[i][1] - x[i][0].length;
        if(need > count){
            if(dif >= 0){
                if(dif > (need - count)){
                    res.push(need - count);
                    count += (need - count);
                    break;
                }
                res.push(dif);
                count += dif;
            } else res.push(0);
        }else break ;


    }
    return count < need ? 'Not enough!' : res
}