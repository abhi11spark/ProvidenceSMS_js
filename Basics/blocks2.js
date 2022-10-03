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
             
        function shek(m,n)
        {
            var o = 17//local
            let p = 18//local
            const q = 19//local
            {
                var r = 20//local
                let s = 21//block
                const t = 22//block
                {
                    var j = 12//local
                    let k = 13//block
                    const l = 14//block
                }
            }
        }
        shek(15,16)//local
        }
        abhi(10,11) //local

    }

