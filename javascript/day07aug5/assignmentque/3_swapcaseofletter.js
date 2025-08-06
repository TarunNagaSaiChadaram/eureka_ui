let a='Hello World';
let b='';
for(let i in a){
    if (a[i]==a[i].toUpperCase()){
        b=b+a[i].toLowerCase();
    }
    else{
        b=b+a[i].toUpperCase();
    }
}
console.log(b);