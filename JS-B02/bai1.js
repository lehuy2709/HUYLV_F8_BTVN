
   /*                                                                            
      var x , flag = true                                                      
      │                                                                     
      │                                                                     
      │                                                                     
      │                                                                     
      │                                                                     
      ▼      yes                                                            
    x < 2   ─────────► !flag   ─────► x ko phải snt                         
                                                                            
      │                                                                     
      │ no                                                                  
      │                                                                     
      ▼                                                                     
    var i = 2                                                               
      │                                                                     
      │                                                                     
      ▼            no                                                       
    i <= x ** 0.5 ┬──────►  flag   ──────►  x là snt                        
       │          │                                                         
       │          │ yes                                                     
       │          │                                                         
       │          │                                                         
       │          ▼          yes                                            
       │        x % i ===0  ─────► !flag ─────►  x k phải là snt            
       │                                                                    
       │          │                                                         
       │          │ no                                                      
       │          │                                                         
       │          │                                                         
       │          ▼                                                         
       └────── i++                                                          
                                                                            
    */



var x = 17
var flag = true
if (x < 2) {
    console.log(`${x} ko phải là số nguyên tố`);
}
else {
    for (var i = 2; i <= x ** 0.5; i++) {
        if (x % i === 0) {
            flag = false
        }
    }
    if (flag) {
        console.log(`${x} là số nguyên tố`);
    }
    else {
        console.log(`${x} ko phải là số nguyên tố`);
    }
}
