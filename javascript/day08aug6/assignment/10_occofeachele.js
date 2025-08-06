// WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let input = [10,20,30,40,50,10,30,50];
// let occ={}

// for(let i=0;i<input.length;i++){
//     let n=input[i];

//     if(occ[n]){
//         occ[n]=occ[n]+1;
//     }
//     else{
//         occ[n]=1;
//     }
// }

// console.log(occ);

//using reduce
let op=input.reduce((occ,val)=>{
    occ[val]=(occ[val]||0)+1;
    return occ;
},{});

console.log(op);