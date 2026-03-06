// function sum(x,y){
//     let s= x+y;
//     return s;
// }

// console.log(sum(3,5));



// function countvowel(str){
//     let c=0;
//     for(let i of str){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             c++;
//         }
//     }
//     console.log(c);
// }
// countvowel("welcome");



// let arr= [2,3,4,5,6];
// arr.forEach((n)=> {
//     console.log(n*n);
// })



// let arr= [2,3,4,5,6];
// let res= arr.map((n)=> {
//     return n*n
// })
// console.log(res);



// let arr= [1,2,3,4];
// let res= arr.reduce((res,curr)=> {
//     return res + curr;
// })
// console.log(res);


// let arr= [11,20,3,8];
// let res= arr.reduce((pre,curr)=> {
//     return pre>curr ? pre : curr;
// })
// console.log(res);


// let arr= [87,93,64,99,86];
// let res= arr.filter((n)=> {
//     return n>90;
// })
// console.log(res);


import {add} from "./utils.js";
const output= add(2,4);
console.log(output);


