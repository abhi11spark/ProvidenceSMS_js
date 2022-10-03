var obj_mobile = new Object()
obj_mobile.model="realme 8"
obj_mobile.os="abdroid 12"
obj_mobile.bill=function(){ return " your "+this.model+" mobile price is Rs.18000"}

var override = new Object()
override.__proto__=obj_mobile
override.model="samsung"
override.os="ryzen"
console.log(override.bill());
console.log(obj_mobile.bill());