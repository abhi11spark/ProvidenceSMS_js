var arr = [77, 88, 99,123,143,99.99]

console.log(arr);
console.log(arr.splice(1,2,"abhi","tyss")); //
console.log(arr); //

// output:
// [ 77, 88, 99, 123, 143, 99.99 ]
// [ 88, 99 ]
// [ 77, 'abhi', 'tyss', 123, 143, 99.99 ]