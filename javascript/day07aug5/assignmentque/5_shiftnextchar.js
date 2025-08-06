let a='abcxyz';
let res='';

for (let i of a){
    res=res+((i==='z')?'a':String.fromCharCode(i.charCodeAt(0)+1));
}

console.log(res);