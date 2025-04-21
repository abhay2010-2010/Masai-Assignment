// // find Factorial
// function factorial(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// // console.log(factorial(5));

// // find count of k
// const arr = [2, 3, 2, 4, 2];
// var k = 2;
// let count = 0;
// for (itm of arr) {
//   if (itm === k) {
//     count++;
//   }
// }
// // console.log(count);

// // remove all zeroes;
// const arr1 = [0, 1, 0, 2, 3, 0, 4];
// const zeroremovedarr = arr.filter((ele) => {
//   return ele !== 0;
// });
// // console.log(zeroremovedarr);

// const arr2 = [1, 2, 3, 4, 5];
// const k1 = 2;
// const ans = [];
// for (let i = arr2.length - k1; i < arr2.length; i++) {
//   ans.push(arr2[i]);
// }
// for (let i = 0; i < arr2.length - k1; i++) {
//   ans.push(arr2[i]);
// }
// // console.log(ans);

// // merge two sorted array
// const arr3 = [1, 3, 5];
// const arr4 = [2, 4, 6];
// const mergearray = [];
// let i = 0,
//   j = 0;
// // let arrlength=Math.max(,)
// // while (i < arr3.length && j < arr4.length) {
// //   if (arr4[i] > arr3[j]) {
// //     mergearray.push(arr3[j]);
// //     j++;
// //   } else if (arr4[i] < arr3[j]) {
// //     mergearray.push(arr4[i]);
// //     i++;
// //   }
// // }
// // while (j < arr3.length) {
// //   mergearray.push(arr3[j]);
// // }
// // while (i < arr4.length) {
// //   mergearray.push(arr4[i]);
// // }
// // console.log(mergearray);

// // sexond max element
// let arr5 = [1, 2, 3, 4, 5];
// let max = arr5[0];
// let secmax = 0;

// for (let i = 1; i < arr5.length; i++) {
//   if (arr5[i] > max) {
//     secmax = max;
//     max = arr5[i];
//   }
// }
// // console.log(secmax)

// // find k by using binary search
// const arr6 = [1, 3, 5, 7, 9];
// let num = 7;
// let init = 0;
// let end = arr6.length - 1;
// let ind=-1;
// while (init <= end) {
//   const mid = init + (init + end) / 2;
//   if (arr6[mid] == k) {
//     ind= mid+1;
//   } else if (arr6[mid] > k) {
//     l = mid + 1;
//   } else {
//     r = mid - 1;
//   }
// }

// // console.log(ind);

// // fibonacchi number of k


// function fibonacchi(n){
//     // console.log(n);
    
// if(n===0){
//     return 0;
// }else if(n===1){
//     return 1;
// }
// else {
//     return (fibonacchi(n-1)+fibonacchi(n-2));
// }
// }
// console.log(fibonacchi(7));

// let num=1234;
// let sum=0;
// while(num>=1){
//     let x=num%10;
//     sum+=x;
//     num=num/10;
// }
// console.log(sum);



// vowels count in string
const str="implementation";

function vowcheck(str){
    let vcount=0
    const vowels= new Set(['a','e','i','o','u']);
    for(let i=0;i<str.length;i++){
        if(vowels.has(str[i])){
            vcount++;
        }
    }
    return vcount;
}

console.log(vowcheck("implementation"));
