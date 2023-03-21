import Composite from './Composite';

export default class Employee implements Composite {
  constructor(private name: string, private salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getCost(): number {
    return this.salary;
  }
}
