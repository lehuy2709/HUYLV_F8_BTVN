const companyA = [
    { id: 1, name: "Minh", age: 25 },
    { id: 2, name: "An", age: 30 },
    { id: 3, name: "Bình", age: 28 },
    { id: 4, name: "Dũng", age: 25 },

];

const companyB = [
    { id: 5, name: "Bình", age: 32 },
    { id: 6, name: "Chi", age: 28 },
    { id: 7, name: "An", age: 29 },
    { id: 8, name: "Dũng", age: 25 },

];
// 1. Viết hàm findCommonNames(arr1, arr2) để tìm những người trùng tên trong cả hai danh sách.

/*                                                                                                                                         
     const comA = [{...}] , const comB = [{...]]                                                                                                     
                                                                                                                                                     
                     │                                                                                                                               
                     │                                                                                                                               
                     ▼                                                                                                                               
       call function findCommonNames(comA,comB)                                                                                                      
                     │                                                                                                                               
                     ▼                                                                                                                               
             let obj = {} , duplicateName = {}                                                                                                       
                    │                                                                                                                                
                    │                                                                                                                                
                    │              ┌──────────────────────────────────────┐                                                                          
                    ▼              │                                      │                                                                          
           for i->comA.length ────►│findByName = comA[i].name             │                                                                          
                                   │           │                          │                                                                          
                                   │           ▼                          │                                                                          
                                   │   obj[findByName] = comA[i].name     │                                                                          
                                   │                                      │                                                                          
                                   │                                      │                                                                          
                                   └──────────────────────────────────────┘                                                                          
                                       ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐     
                                       │                                                                                                       │     
                                       │                                                   yes                                                 │     
              for j->comB.length  ────►│findByName = comB[i].name ─────► if(obj[findByName]┌─────► duplicateName[findByName] = findByName      │     
                                       │                                                   │                                                   │     
                                       │                                                   │no                                                 │     
                                       │                                                   │                                                   │     
                                       │                                                   ▼                                                   │     
                                       │                                                 do nothing                                            │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       │                                                                                                       │     
                                       └───────────────────────────────────────────────────────────────────────────────────────────────────────┘                                                                                                                                                                                                                                             
                                                                                                                                                     
  */
function findCommonNames(arr1, arr2) {
    let obj = {}
    let duplicateName = {}
    for (let i = 0; i < arr1.length; i++) {
        let findByName = arr1[i].name
        obj[findByName] = arr1[i].name
    }
    for (let i = 0; i < arr2.length; i++) {
        findByName = arr2[i].name
        if (obj[findByName]) {
            duplicateName[findByName] = findByName
        }
    }
    return duplicateName
}
console.log(findCommonNames(companyA, companyB))

// 2. Viết hàm findCommonAgesAndName(arr1, arr2) để tìm những người có cùng độ tuổi và tên trong cả hai danh sách.


/*
                                                                                                                                                                        
                                                                                                                                                                    
                                                                                                                                                                    
  const comA = [{...}] , const comB = [{...]]                                                                                                                       
                                                                                                                                                                    
                  │                                                                                                                                                 
                  │                                                                                                                                                 
                  ▼                                                                                                                                                 
    call function findCommonNames(comA,comB)                                                                                                                        
                  │                                                                                                                                                 
                  ▼                                                                                                                                                 
          let obj = {} , let ageAndName , let dupliAgeName = {}                                                                                                     
                 │                                                                                                                                                  
                 │                                                                                                                                                  
                 │                                                                                                                                                  
                 ▼                                                                                                                                                  
        for i->comA.length ────►   ageNameName = comA[i].name + "" + comA[i].age                                                                                    
                                            │                                                                                                                       
                                            ▼                                                                                                                       
                                   obj[ageAndName] = { name: comA[i].name, age: comB i].age };                                                                      
                                                                                                                                                                    
                                                                                                                                                                    
                                                                                                                                                                    
                                      ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐  
                                      │                                                                                                                          │  
                                      │                                                                        yes                                               │  
           for j->comB.length  ────►  │ageAndName = comA[i].name + "" + comA[i].age  ────►  if(obj[ageAndName])┌─────► dupliAgeName[ageAndName] = ageAndName     │  
                                      │                                                                        │                                                 │  
                                      │                                                                        │no                                               │  
                                      │                                                                        ▼                                                 │  
                                      │                                                                      do nothing                                          │  
                                      │                                                                                                                          │  
                                      │                                                                                                                          │  
                                      │                                                                                                                          │  
                                      │                                                                                                                          │  
                                      │                                                                                                                          │  
                                      │                                                                                                                          │  
                                      └──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘  
                                                                                                                                                                    
                                                                                                                                                                                                                                                                                
 */

function findCommonAgesAndName(arr1, arr2) {
    let obj = {}
    let ageAndName
    let dupliAgeName = {}
    for (let i = 0; i < arr1.length; i++) {
        ageAndName = arr1[i].name + " " + arr1[i].age;
        obj[ageAndName] = { name: arr1[i].name, age: arr1[i].age };
    }
    for (let i = 0; i < arr2.length; i++) {
        ageAndName = arr2[i].name + " " + arr2[i].age;
        if (obj[ageAndName]) {
            dupliAgeName[ageAndName] = ageAndName
        }
    }
    return dupliAgeName
}

console.log(findCommonAgesAndName(companyA, companyB))
