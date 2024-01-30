//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

// console.log(/* your code here */);

function sortedArray(arr) {
   return arr.sort((a,b) => a-b);
}
// console.log(sortedArray(nums1));
// console.log(sortedArray(nums2));
// console.log(sortedArray(nums3));

function minValue(a){
    let min =a[0];
    for(i=1;i<a.length;i++){
        if (min>a[i])
        min=a[i]
    }
    return min;
}
console.log(sortedArray(nums1),minValue(nums1));
console.log(sortedArray(nums2),minValue(nums2));
console.log(sortedArray(nums3),minValue(nums3));