// let a=10;
// let b=20;
// // a=a+b;
// // b=a-b;
// // a=a-b;
// let temp=a;
// a=b;
// b=temp;
// console.log(a,b);

// let numbers = [3, 5, 9, 2, 8];
// let largenum=numbers[0];
// for(let i=1;i<numbers.length;i++){
// if(numbers[i]>largenum){
//     largenum=numbers[i];
// }
// }
// console.log(largenum);

// let arr=[{fname:"aaa",lname:"rrr", age:11},{fname:"bbb",lname:"qqq",age:12}];
// // expected={aaa_rrr:11,bbb_qqq:12};
//  let ans=arr.reduce((acc,itm)=>{
//     acc={...acc,[`${itm.fname}_${itm.lname}`]:`${itm.age}`}
// return acc;
//  },{});

//  console.log(ans);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 19 },

  { name: "David", age: 47 },
  { name: "Emily", age: 28 },
  {name:"abhi",age:50}
];

let avgage =
  people.reduce((curr, itm) => {
    !curr.age|| curr.age<itm.age ? curr=itm :null;

    return curr;
  }, {}) ;
// console.log(avgage);

//input format
const strings = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];

//output format

// {
//   apple: 3,
//   banana: 2,
//   orange: 1,
//   pear: 1
// }
let str=strings.reduce((curr,item)=>{
    curr[item] = (curr[item] || 0) + 1;
    return curr
},{})

// console.log(str)
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
const sum=numbers.reduce((acc,item)=>{
    if( item%5===0){
            acc+=item
        
    }
    return acc;
},0);
// console.log(sum);
const words = ["racecar", "hello", "deified", "world", "level", "programming", "radar", "civic", "javascript"];
let pal=words.filter((itm,ind)=>{
const rev=itm.split('').reverse().join('');
return itm===rev;
})
 console.log(pal);