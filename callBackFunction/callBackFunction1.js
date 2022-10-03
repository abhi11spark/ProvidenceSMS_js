var a = 11
var b = 7
function sum(a,b)
{
    console.log("sum execution started");
    return a+b
}
function sub(a,b)
{
    console.log("subtraction execution started");
    return a-b
}
function mul(a,b)
{
    console.log("multiplication execution started");
    return a*b
}
function include(addition, subtration, multiplication)
{
    console.log("include function started execution");
    add = addition(a,b)
    console.log(add);
    diff= subtration(a,b)
    console.log(diff);
    multi = multiplication(a,b)
    console.log(multi);
    console.log("include function ended its execution");
}
include(sum,sub,mul)