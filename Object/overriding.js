var subject={
    subjectName:"science",
    subjectCode:"s1",
    grade:10,
sName:function()
{
   return "you opted :"+ " "+this.subjectName+" "+this.subjectCode
}
}
var override = Object.create(subject) //override
override.subjectName="mathematics"
override.subjectCode="m1"
override.grade1=11
console.log(override);
console.log(subject);
console.log(subject.sName());
console.log(override.sName());