let a='Rabindra Nath Tagore';
let a_split=a.split(" ");
let abbr=''
for(let i=0;i<a_split.length-1;i++){
    abbr=abbr+a_split[i][0]+'.';
}
let lastword=a_split[a_split.length-1][0].toLowerCase()+a_split[a_split.length-1].substring(1);
abbr=abbr+lastword;
console.log(abbr);