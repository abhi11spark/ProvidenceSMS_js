class variables{
static a= 10
 b = 20

 constructor(c,d)
 {
    this.c=c
    this.d=d
 }

 demo()
 {
    console.log(this.c);
    console.log(this.d);
    console.log(variables.a);
    console.log(this.b);
 }
 static demo1()
 {
    console.log(this.c);
    console.log(this.d);
    console.log(this.a);
    console.log(variables.b);
//creating the object
var e =new variables()
console.log(e.b); 

 }
 demo3()
 {
   variables.demo1()  // static method inside the non static method
   this.demo()    // non static method inside non static method
 }
 static demo4(obj_ref)
 {
    obj_ref.demo()  //nonstatic method inside the static method
    this.demo1()  //static method inside the static method
 }
 
}
//instance of
 var data = new variables("hi","good morning")
 var data1 = new variables("15"," 16")

data.demo()
data1.demo()
data.demo3()
data1.demo3()
variables.demo1()
variables.demo4()
