// Viết một hàm getFullName nhận vào một object có thông tin người dùng, sử dụng destructuring để lấy ra firstName và lastName, sau đó trả về tên đầy đủ.
/*                                                                                                                
                                                                                                                
               const user = { firstName: "Nguyễn", lastName: "Văn A", age: 25 };                                
                                                                                                                
                                           │                                                                    
                                           │                                                                    
                                           │                                                                    
                                           ▼                         return                                     
          ┌───────────────► declare function({firstName,lastName})  ──────►     `${firstName} ${lastName}`      
          │                                                                                                     
          │                                                                                                     
          │                                                                                                     
          │                                                                                                     
          └─────────────  call function with parameter(user)                                                    
                                                                                                                 */

const user = { firstName: "Nguyễn", lastName: "Văn A", age: 25 };
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`
console.log(getFullName(user));

// Tính tổng giá trị đơn hàng bằng reduce

/*
                                                                                                                                              
                                                                                                                                              
                                                                                                                                              
           0   [{price: 5000, quantity: 3},{price: 12000, quantity: 2},{price: 8000, quantity: 1}]                                            
                                          ─────────────────┬──────────                                                                        
          ────────┬───────────────────────                 │           ───────────────────┬───────────────                                    
                  │                                        │                              │                                                   
                  │                                        │                              │                                                   
                  │                                        │                              │                                                   
                  ▼                                        │                              │                                                   
              total = 0                                    │                              ▼                                                   
           order.price = 5000                              │                        total = 39000                                             
           order.quantity = 3                              │                     order.price = 8000                                           
return total += order.price * order.quantity               │                     order.quantity = 1                                           
                                                           │            return total += order.price * order.quantity  ───────►  total = 47000 
                                                           │                                                                                  
                                                           │                                                                                  
                                                           ▼                                                                                  
                                                   total = 15000                                                                              
                                                order.price = 12000                                                                           
                                                order.quantity = 2                                                                            
                                      return total += order.price * order.quantity                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                              
*/

const orders = [
    { item: "Bút", price: 5000, quantity: 3 },
    { item: "Vở", price: 12000, quantity: 2 },
    { item: "Thước", price: 8000, quantity: 1 }
];

const calculateTotal = (orders) => {
    return orders.reduce((total, order) => {
        return total += order.price * order.quantity
    }, 0)

}

console.log(calculateTotal(orders))
