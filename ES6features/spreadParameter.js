var arr1 = ["hi ", "i am","abhi"]
var arr2 = [1,2,3,4]
var arr3 = [...arr1,...arr2]
console.log(arr3);
console.log("*****************");

var arr1 = ["hi ", "i am","abhi"]
var arr2 = [...arr1,4]
console.log(arr2);
console.log("*****************");
 var obj_ref ={
    name:"abhi",
    place:"tumakuru",
    yoe:"4 years"
 }
 var obj_ref1 = { ...obj_ref
 }
 console.log(obj_ref1);
 console.log("*****************");
 var obj_ref ={
    name:"abhi",
    place:"tumakuru",
    yoe:"4 years"
 }
 var obj_ref1 = {
    company:"tyss",
    desig:"ste",
    yoe:"5 years"
 }
 var obj_ref2={ ...obj_ref,...obj_ref1}
 console.log(obj_ref2);
 console.log("*****************");