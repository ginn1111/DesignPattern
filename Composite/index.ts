import Department from "./Department";
import Employee from "./Employee";

const root: Department = new Department("CT TNHH N08");

const itDepartment: Department = new Department("IT Department", 1000);
const hrDepartment: Department = new Department("HR Department", 800);
const systemDepartment: Department = new Department("System Department", 1500);

const e1: Employee = new Employee("NV01", 500);
const e2: Employee = new Employee("NV02", 500);
const e3: Employee = new Employee("NV03", 500);

root.add([itDepartment, hrDepartment]);
itDepartment.add(systemDepartment);

itDepartment.add(e1);
itDepartment.add(e2);
systemDepartment.add(e3);

console.log(root.getCost());
