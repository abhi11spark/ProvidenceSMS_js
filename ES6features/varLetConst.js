// console.log(a);   //a is not defined(if only line 1 is executed) //undefined if (line 1 to 5 is executed)
//     var a  //global
//     a = 100;
//     var a =200
//     console.log(a);   //200
    
    //****************************************************************************************/
    
    // console.log(x);  // x is not defined (if only line 9 is executed) //Cannot access 'x' before initialization(if executed from 9 to 14)
    // let x 
    // x = 20
    // // let x = 35    //error (let cannot be redeclared but it can be reinitialised)
    // x = 95              
    // console.log(x);    //95
    //****************************************************************************************/
    
    // const y = 3.1415;    //declared y
    
    // function fun1() {
    //     console.log("local"); 
    // }
    // y = 3;             // Assignment to constant variable.            
    // console.log(y);   //3.1415 (if line 22 is not executed)
    
    //****************************************************************************************/
    
    // {
    //     var b = "Rekha" // global
    //     let w = "welcome" //block
    // }
    
    //****************************************************************************************/
    
    // console.log(index);    //index is not defined (if only line 34 is executed)   //undefined      
    // for (var index = 0; index < 5; index++) {
    //     console.log(index);
    // }                               // 0,1,2,3,4                                         
    // console.log(index);   //5
    
    //****************************************************************************************/
    
    // console.log(index);           //index is not defined (if only line 42 is executed)      //index is not defined(from 42 to 46)
    for (let index = 0; index < 5; index++) {
        console.log(index);               //0,1,2,3,4              
    }
    console.log(index);       //index is not defined(from 42 to 46)
    
    //****************************************************************************************/
    
    // var a = 100;
    // console.log(a);   //100
    // {
    //     var a = 200
    //     console.log(a);   //200
    // }
    // console.log(a);   //200
    
    //****************************************************************************************/
    
    // let x = 10
    // {
    //     let x = 20 //block
    // }
    // console.log(x);  //10
    
    //****************************************************************************************/
    
    // var a = 20
    // let a = 30
    // console.log(a);  //Identifier 'a' has already been declared

//****************************************************************************************/
