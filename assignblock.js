{
    {
var a=10 //global
let b=20 //block
const c=30 //block
function fname() {
    {
        function fname1() 
        {
            var g=90 //local
            let s=45//local
            const p=55//local
          {
            var j=70//local
            let k=45//block
            const f=33 //block
            function fname2() 
            {
                var l=99 //local
                let w=100 //local
                const o=33 //local
                {
                var q=10 //local
                let r=20 //block
                const u=30 //block
                }
            }
            fname2()
           }    
        }
        fname1()
    }
}
fname()
}
}