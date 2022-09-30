(sum = function(a,b)
{
    console.log(a+b)
    console.log(arguments[4]);
})(11,55,77,88,99)
(mul = function(a,b)
{
    console.log(a*b)
    console.log(arguments[3]);
})(11,55,77,88,99)