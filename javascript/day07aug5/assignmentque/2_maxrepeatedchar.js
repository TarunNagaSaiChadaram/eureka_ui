let a='hello world';
let letter_count={};
let bigchar='';
let number_bigchar=0
for(let i of a){
    if(i !=" "){
        if(letter_count[i]){
            letter_count[i]=letter_count[i]+1;
        }
        else{
            letter_count[i]=1
        }
    }
}
for(let j in letter_count){
    if(letter_count[j]>number_bigchar){
        number_bigchar=letter_count[j];
        bigchar=j
    }
}

console.log(bigchar)
