(async function () {
    const data = await fetch("data.json");
    const res = await data.json();
    
    let employees = res;
    let selectedEmployeeId = employees[0].id; // this gets the properties of the objects in the array
    let selectedEmployee = employees[0]; // gets the first object in the array

    const employeeList = document.querySelector('.employee__names--list');
    const employeeInfo = document.querySelector('.employee__single--list')

    //Add Employee Logic
    employeeList.addEventListener("click", (e) =>{
        if (e.target.tagName ==="SPAN" && selectedEmployeeId !==e.target.id {
            selectedEmployeeId = e.target.id
        }
            
         )
    })


    //Select Employee Logic

    const renderEmployees = () => { 
        employeeList.innerHTML = "";
        employees.forEach((emp) => {
            const employee = document.createElement("span");
            employee.classList.add('employees__names--item');

            if(parseInt (selectedEmployeeId, 10) === emp.id){
                employee.classList.add("selected");
                selectedEmployee = emp;
            }

            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class = "employeeDelete"> ❌ </i>`;

            employeeList.append(employee);


        })
    }
    // Render Single Employee
    renderEmployees();
})();
