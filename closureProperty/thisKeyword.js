var subject={
    subjectName:"science",
    subjectCode:"s1",

name:function()
{
  console.log(subject);
  console.log(this.grade);
  console.log(this.subjectCode);
  console.log(this.subjectName);
}
}
var subject1={
    subjectName:"physics",
    subjectCode:"p1",
    grade:11,

name:function()
{
    console.log(subject1);
  console.log(this.grade);
  console.log(this.subjectCode);
  console.log(this.subjectName);
}
}
subject1.name()
// subject.name()
