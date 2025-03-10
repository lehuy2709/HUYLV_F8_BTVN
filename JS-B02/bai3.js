/*
         var x ,  var sum = 1                                                                                      
                 │                                                                                                 
                 │                                                                                                 
                 │                                                                                                 
                 │                                                                                                 
                 ▼                                                                                                 
         for (var i = 2 )                                                                                          
                                                                                                                   
                 │                                                                                                 
                 │                                                                                                 
                 │                                                                                                 
                 ▼           no                                                                                    
             i <= x / 2     ┬─────►  break                                                                         
                 │          │                                                                                      
                 │          │                                                                                      
                 │          │ yes                                                                                  
                 │          │                                                                                      
                 │          │                                                                                      
                 │          ▼        yes                                    no                                     
                 │     x % i ===0  ─────────►  sum+=i  ───────► sum === x  ┌────────► x ko phải số hoàn hảo        
                 │          │                                              │                                       
                 │          │no                                            │yes                                    
                 │          │                                              │                                       
                 │          ▼                                              ▼                                       
                 └──────► i++                                             x là số hoàn hảo                         
                                                                                                                   
*/

var x = 6
var sum = 1
for (var i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
        sum += i
    }
}
if (sum === x) {
    console.log(`${x} là số  hoàn hảo`)
}
else {
    console.log(`${x} không phải là số hoàn hảo`)
}