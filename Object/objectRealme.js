

var cellular={
    manufactureYear:2022,
    os:"Android12",
    Specifications: {ram:"8GB",rom:"128GB",colour:"black"},
cost:function()
{
    return 18000
}
}

console.log(cellular);
cellular.manufactureYear=2021
console.log(cellular.manufactureYear);
delete cellular.manufactureYear
console.log(cellular.manufactureYear);
console.log(cellular.Specifications);

