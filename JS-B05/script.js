/*                                                                                                                
                                                                                                                       
          const companies =[{...}] , const employees = [{...}]                                                                                                                                                      
                                 │                                                                                     
                                 │                                                                                     
                                 │                                                                                     
                                 ▼                                                                                     
           const avgSlaryCompany = companies.map(company)                                                              
                                 │                                                                                     
                                 ▼                                                                                     
         ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐          
         │                                                                                                  │          
         │    let cpmEmployees = employees.filter(employee) ────► return employee.companyId === company.id  │          
         │                        │                                                                         │          
         │                        │                                                                         │          
         │                        │                                                                         │          
         │                        │                                                                         │          
         │                        │                                                                         │          
         │                        ▼                                                                         │          
         │            for cpmEmployee of cpmEmployees ────► sum += cpmEmployee.salary                       │          
         │                         │                                                                        │          
         │                         ▼                                                                        │          
         │                let avgSlaryByCompany = sum / cpmEmployees.length                                 │          
         │                                   │                                                              │          
         │                                   │                                                              │          
         │                                   │                                                              │          
         │                                   ▼                                                              │          
         │                      return {                                                                    │          
         │                        name: company.name,                                                       │          
         │                        employees: cpmEmployees,                                                  │          
         │                        averageSalary: avgSlaryByCompany,                                         │          
         │                      }                                                                           │          
         │                                                                                                  │          
         └──────────────────────────────────────────────────────────────────────────────────────────────────┘          
                                                                                                                       
                                                                                                                       
 */

const companies = [
  { id: 1, name: "Tech Corp" },

  { id: 2, name: "Finance Inc" },

  { id: 3, name: "Health Plus" },
];

const employees = [
  { name: "Alice", companyId: 1, salary: 15000000 },

  { name: "Bob", companyId: 1, salary: 18000000 },

  { name: "Charlie", companyId: 2, salary: 22000000 },

  { name: "David", companyId: 2, salary: 20000000 },

  { name: "Eve", companyId: 3, salary: 25000000 },
];
const avgSalaryCompany = companies.map(function (company) {
  let cpmEmployees = employees.filter(function (employee) {
    return employee.companyId === company.id;
  });
  let sum = 0;
  for (let cpmEmployee of cpmEmployees) {
    sum += cpmEmployee.salary;
  }
  let avgSalaryByCompany = sum / cpmEmployees.length;
  return {
    name: company.name,
    employees: cpmEmployees,
    averageSalary: avgSalaryByCompany,
  };
});
console.log(avgSalaryCompany);
