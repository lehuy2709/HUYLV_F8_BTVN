/*
                                                                                                                
                                                                                                                                                                                                                                                                                                                      
                                                                                                                
                   const cart = [{...}]                                                                         
                                                                                                                
                            │                                                                                   
                            │                                                                                   
                            ▼                                                                                   
            define a function to handle deletion by id (removeById, deleteCount)                                
                            │                                                                                   
                            │                                                                                   
                            ▼                                                                                   
             ┌─────────────────────────────────────────────────┐                                                
             │                                                 │                                                
             │  cart.splice(removeById, deleteCount)           │                                                
             │                                                 │                                                
             │                                                 │                                                
             └─────────────┬───────────────────────────────────┘                                                
                           │                                                                                    
                           │                                                                                    
                           ▼                                                                                    
               define a function to handle deletion by delay time(productId, delay)                             
                           │                                                                                    
                           │                                                                                    
                           │                                                                                    
                           ▼                                                                                    
   removeById =  findIndex((product) => product.id === productId)                                               
                           │                                                                                    
                           │                                                                                    
                           │                                                                                    
                           ▼          no                                                                        
                   removeById !== -1  ──────►  Product does not exist                                           
                                     │                                                                          
                                     │                                                                          
                                     │yes                                                                       
                                     │                                                                          
                                     ▼                                                                          
                               setTimeout (call function to delete by id (removeId,deleteCount),delay)          
                                                                                                                
                                                                                                                                                                                                                             

*/
const cart = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];
const deleteHandler = (removeById, deleteCount) => {
    cart.splice(removeById, deleteCount)
    console.log(cart)
}
const removeItemAfterDelay = (productId, delay) => {
    let removeById = cart.findIndex((product) => product.id === productId)
    if (removeById !== -1) {
        setTimeout(() => {
            deleteHandler(removeById, 1)
        }, delay)
    }
    else {
        alert("Product does not exist")
    }
}

removeItemAfterDelay(2, 1000)
