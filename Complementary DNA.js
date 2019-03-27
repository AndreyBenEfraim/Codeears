/**
 * @return {string}
 */
function DNAStrand(dna){
    const dnaarr = dna.split('');
    for(let i=0; i<dnaarr.length ; i++){

        switch(dnaarr[i]) {

            case 'A':
                dnaarr[i] = 'T';
                break ;
            case 'T':
                dnaarr[i] = 'A' ;
                break ;
            case 'C':
                dnaarr[i] = 'G';
                break ;
            case 'G':
                dnaarr[i] = 'C' ;
                break ;
        }
    }

    return  dnaarr.join('');
}

console.log(DNAStrand("CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT"));