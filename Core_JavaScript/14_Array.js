let arr = [1,2,3,4,5];
// console.log(arr);

//Find the element in the given index
/*
console.log(arr[1]);
console.log(arr[0]);
console.log(arr[4]);
**/

//Finding the length of the array
// console.log(arr.length);

// 2nd way of creating array
let arr2 = Array(12,3,5);
// console.log(arr[-1])


// 3rd way of creating arrays Constructor way
fruits = new Array("Apple", "Mango", "Banana")
// console.log(fruits)


/**
* Deleting the element from the array
* 
*  Should not use it
*/
arr = [1,2,3,4,5,6]
// console.log(arr)
// console.log(arr.length)

// delete arr[2]

// console.log(arr)
// console.log(arr.length)


// for loop
let marks = [90,89,84,91,93];
for(let i=0;i<marks.length;i++){
    // console.log(marks[i]);
}

// 2nd way 
for(let val of marks){
    // console.log(val);
}

// function of array
function sum_arr(arr){
    sum =0
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sum_arr([3,4,2,1,5]))



