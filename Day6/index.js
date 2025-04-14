// let arr=[[1,2,[11,12,13,[14,15]]],[3,4],[5,6],[7,8],[9,10]];
// //let arr1=[1,2,3,4,5,6,7,8,9,10];
// // console.log(Array.is)
// let arr1=[];
// function flatten(ele){
// for(let i=0;i<ele.length;i++){
//     if(Array.isArray(ele[i])){
//         flatten(ele[i]);
//     }else{
//         arr1.push(ele[i]);
//     }
// }
// }

// flatten(arr);
// console.log(arr1);
// let ans = [];
// let arr = [1, 2, 4, 5, 7, 8, 9];
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] + 1 === arr[i + 1]) {
//     temp.push(arr[i]);
//   } else {
//     temp.push(arr[i]);
//     ans.push(temp);
//     temp=[];
//   }
// }
// console.log(ans);

// let obj = {
//   name: "abhay",
//   gree: function greet() {
//     return `hi ${this.name}`;
//   },
// };
// // let ans = obj.gree();
// // console.log(ans);

// let obj2=[{name:"nhbexer",age:12},{name:"kjenx",age:23}];

// let avgage=obj2.reduce((curr,acc)=>{

//     return(acc.age+curr)
//     // console.log(curr);
//     // console.log(acc.age);
    
// },0)/obj2.length;

// // console.log({"avgage":avgage});

// const arr=[1,3,4,5,6,7];
// // expect=[11,22,33,44,55,66,77];
// const ans=arr.reduce((acc,curr)=>{ 
//     acc.push(curr*10+1);
//  return acc;
// },[])
//  let sum=ans.filter((ele)=>ele<70).reduce((curr,acc)=>curr+acc,0)/5
// console.log(sum);

// let obj={};
// obj[1]="abhay";
// obj["1"]="kjns";
// console.log(obj);

// for(var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(x);
let x=0;
console.log(y)
var y=0;
console.log(greet());
function greet(){
    return("hello abhay");
}