const employees = [
    { name: "Alice", department: "HR", salary: 40000 },
    { name: "Bob", department: "IT", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 60000 },
    { name: "David", department: "HR", salary: 45000 }
  ];

//for highest salary
//  let highsal_dept=employees.reduce((max_sal,curr)=>{
//     return curr.salary>max_sal?curr.salary:max_sal;
//  },0)

//  console.log(highsal_dept);


let groupedbydept=Object.groupBy(employees,emp=>emp.department);
let groupedbydept_array=Object.entries(groupedbydept);
let avgsalperdept=groupedbydept_array.map(([dept,emps])=>{
    let tot_sal=emps.reduce((sum_sal,emp)=>sum_sal+emp.salary,0);
    let avgSal=tot_sal/emps.length;
    return{department:dept,avgSalary:avgSal};
});

let avghighestsaldept=avgsalperdept.reduce((highest,curr)=>{
    return curr.avgSalary>highest.avgSalary?curr:highest;
})

console.log(avghighestsaldept.department)


