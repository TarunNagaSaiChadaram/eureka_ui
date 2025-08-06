let a='entertainment';
let letter_count={};

for(let i of a){
    if(letter_count[i]){
        letter_count[i]++
    }
    else{
        letter_count[i]=1;
    }
}
console.log(letter_count);