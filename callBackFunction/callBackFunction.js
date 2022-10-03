function sum(a,b) //pre condition or data hiding
{
    console.log("sum execution started");
    return a+b
}
 function abhi(a,b,add)
 {
    console.log("started abhi function");
    res = add(a,b)
    console.log(res);
    console.log("ended abhi function");
 }
 abhi(7,11,sum)