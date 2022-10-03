var a = 1 //global
let b = 2 //script
const c = 3 //script


    {
        var g = 7//global
        let h = 8//block
        const i = 9//block
        
        function abhi(a,b)
        {
            var d = 4//local
            let e = 5//local
            const f = 6//local
        }
        abhi(10,11) //local

    }

{
    var j = 12//global
    let k = 13//block
    const l = 14//block
}