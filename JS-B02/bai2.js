/*                                                                                                                                                                                                                     
      var x , flag = false                                                                                   
              │                                                                                              
              │                                                                                              
              │                                                                                              
              │                                                                                              
              ▼                                                                                              
      for (var i = 1 )                                                                                       
                                                                                                             
              │                                                                                              
              │                                                                                              
              │                                                                                              
              ▼           no                                                                                 
          i <= x ** 0.5  ┬─────►  flag = false ─────► x ko phải số chính phương                              
              │          │                                                                                   
              │          │                                                                                   
              │          │ yes                                                                               
              │          │                                                                                   
              │          │                                                                                   
              │          ▼        yes                                                                        
              │     x === i**2  ─────────►  flag = true ────────► x là số chính phương                       
              │          │                                                                                   
              │          │ no                                                                                  
              │          │                                                                                   
              │          ▼                                                                                   
              └──────► i++                                                                                                                                                                                                                                                                         
*/


var x = 9
var flag = false

for (i = 1; i <= x ** 0.5; i++) {
    if (x === i ** 2) {
        flag = true
    }
}
if (flag) {
    console.log(`${x} là số chính phương`)
}
else {
    console.log(`${x} không phải là chính phương`)
}
