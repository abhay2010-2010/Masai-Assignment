// let str="masai";
// let unq = '';
//   for (let char of str) {
//     if (!unq.includes(char)) {
//       unq += char;
//     }
//   }
// console.log(unq);
let str="abhayi";
let ans="";
let vowel="aeiou";
for(let ch of str){
if(ch!='a' && ch!='e' && ch!='i'&&ch !='o' && ch!='u'){
    ans+=ch;    
}
}
console.log(ans);