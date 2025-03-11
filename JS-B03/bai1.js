/*
       var myArray = [6,9,1,...]                                                          
                  │                                                                       
                  │                                                                       
                  │                                                                       
                  │                                                                       
                  ▼                                                                       
          call function Sort(prameter = myArray)                                          
                  │                                                                       
                  │                                                                       
                  │                                                                       
                  │                                                                       
                  ▼                                                                       
             for i 0 ─► myArray.length - 1                                                
                  │                                                                       
                  │                                                                       
                  │                                                                       
                  │             ┌──────────────────────────────────────────────────────┐  
                  │             │                                                      │  
                  │             │                                                      │  
                  └────────────►│  for j 0->myArray.length - 1                         │  
                                │     │                                                │  
                                │     │                                                │  
                                │     │                                                │  
                                │     │                                                │  
                                │     ▼                         no                     │  
                                │   myArray[j] > myArray[j+1]  ──────►  Do nothing     │  
                                │     │                                                │  
                                │     │ yes                                            │  
                                │     │                                                │  
                                │     ▼                                                │  
                                │ temp = myArray[i]                                    │  
                                │     │                                                │  
                                │     ▼                                                │  
                                │  myArray[j] = myArray[j + 1]                         │  
                                │     │                                                │  
                                │     │                                                │  
                                │     ▼                                                │  
                                │   myArray[j + 1] = temp                              │  
                                │                                                      │  
                                │                                                      │  
                                └──────────────────────────────────────────────────────┘                                                                                     
*/
var myArray = [6, 9, 1, 5, 4]
function Sort() {
    let temp
    for (var i = 0; i < myArray.length - 1; i++) {
        for (j = 0; j < myArray.length - 1 - i; j++) {
            if (myArray[j] > myArray[j + 1]) {
                temp = myArray[j]
                myArray[j] = myArray[j + 1]
                myArray[j + 1] = temp
            }
        }
    }
    return myArray
}

console.log(Sort(myArray));
