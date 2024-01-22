// map method 
let nums = [1,2,3,4,6];
nums.map((val) =>{
    // console.log(val);
})
let newarray = nums.map((val2) =>{
    return val2 * 2;
})
// console.log(newarray);


// filter method
let arr = [1,2,3,4,5,6,7,8,9,10]
let new_arr = arr.filter((val) =>{
    return val%2==0;
})
// console.log(new_arr);


// Reduce method
const arr2 = [1,2,3,4,5]
const a= arr2.reduce((prev, curr) =>{
    return prev +curr;
})
console.log(a);


let P = [3,5,6,78,4];
let output = P.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;
});
console.log(output); // that is 78



let marks = [97,39,94,59,65];
let m = marks.filter((value) =>{
    return value >90;
})
console.log(m);



