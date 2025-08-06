// 7. add Dept info for each employee
//     employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
// 				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
// 	departments = [{ eId: 101, dept: "sales" },
// 				{ eId: 104, dept: "marketing" }]

let employees = [{ eId: 101, name: "sanjay", sal: 5000, gender: "male" },
{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
let departments = [{ eId: 101, dept: "sales" },
{ eId: 104, dept: "marketing" }]

for(let i=0;i<employees.length;i++){
    employees[i].dept=null;
    for(let j=0;j<departments.length;j++){
        if(employees[i].eId==departments[j].eId){
            employees[i].dept=departments[j].dept;
            break;
        }
    }
}
console.log(employees);