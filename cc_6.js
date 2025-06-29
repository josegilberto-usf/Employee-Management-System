// Step 2: Employee Class representing an employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}.`;
    }
}

// Step 3: Manager Class extending Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages a team of ${this.teamSize} in ${this.department}.`;
    }
}

// Step 4: Sample Employees And Managers
const employees = [
    new Employee("Alice", "Engineering"),
    new Employee("Bob", "Marketing"),
    new Manager("Charlie", "Engineering", 5),
    new Manager("Diana", "Sales", 10)
];

// Step 5: Company Class to manage employees
class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp => console.log(emp.describe()));
    }
}

// Step 6: Instantiate Company
const myCompany = new Company(employees);
employees.forEach(emp => myCompany.addEmployee(emp));
myCompany.listEmployees();


