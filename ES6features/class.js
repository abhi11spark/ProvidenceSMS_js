class abhi{

    constructor(company, designation,){
        this.company=company
        this.designation=designation
    }
static place = "kattriguppe"
route = "main road"

demo()
{
    console.log("started non static method");
    console.log(this.company);
    console.log(this.designation);
    console.log(abhi.place);
    console.log(this.route);
    console.log("ended non static method");
}

static demo1()
{
    console.log("started static method");
    console.log(this.company);
    console.log(this.designation);
    console.log(abhi.route);
    console.log(this.place);
    console.log("ended static method");

    //creating an object for non static variable or method
    var a = new abhi()
    console.log(a.route);

}


}
//instance 
let data =new abhi("tyss","test engineer")
let data2 =new abhi("tyss1","automation engineer")

//accessing static and non static members

console.log(abhi.place);  // for static methods classname.variable_name
//to access this static variable inside the class we just have to use variable name as it is, 
//if its outside the class we have to use classname with dot operator and variable name

console.log(data.route);  // for non-static methods ref_name.variable_name
//to access this non static variable inside the class we just have to create a reference variable using new keyword and access it using ref_name.variable_name 
//if its outside the class we have to use the same ref_name.variable_name

data.demo(); //for non static menthods ref_name.method name
//to access this non static method inside the class we just have to create a reference variable using new keyword and access it using ref_name.method_name 

abhi.demo1();//for  static menthods classname.method name
//to access this static method inside the class we just have to use method_name as it is, 
//if its outside the class we have to use classname with dot operator and method_name