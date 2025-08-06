// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [ 
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
    ];

res=''
for(i of inputArr){
    if(i!=''){
        res=res+i;
    }
    else{
        res=res+' '
    }
}
console.log(res.split(" "));