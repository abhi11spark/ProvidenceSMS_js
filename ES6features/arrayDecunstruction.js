//declaration of an array
var arr1 = [10,50, 69, 76, 38]

//case1: accessing elements of an array in normal way
var first = arr1[2]
var second = arr1[4]
console.log(first,second);          

//case2: accessing first 2 elements of an array 
var [a,b] = arr1
console.log(a,b);               

//case3: accessing first 3 elements of an array 
var [e,f,g] = arr1
console.log(e,f,g);               

//case4: accessing elements of an array by skipping the elements in between
var[a,,,b]=arr1
console.log(a,b);       
