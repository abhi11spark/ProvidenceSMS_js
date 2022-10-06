
let arr1 = [10,50, 69, 76, 38]

//case1: accessing elements of an array in normal way
let a = arr1[2]
let b = arr1[4]
console.log(a,b);          

//case2: accessing first 2 elements of an array 
let [s,d] = arr1
console.log(s,d);               

//case3: accessing first 3 elements of an array 
let [x,y,z] = arr1
console.log(x,y,z);               

//case4: accessing elements of an array by skipping the elements in between
let[k,,,p]=arr1
console.log(k,p);       
