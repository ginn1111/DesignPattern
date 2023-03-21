import Composite from "./Composite";

export default class Department implements Composite {
  private childs: Composite[] = [];
  private addCost: number = 0;
  private name: string;

  constructor(name: string, addCost?: number, childs?: Composite[]) {
    this.name = name;
    addCost && (this.addCost = addCost);
    childs && (this.childs = childs);
  }

  getCost(): number {
    console.log(`getCost of ${this.name}...`);
    return this.childs.reduce(
      (total: number, child) => total + child.getCost(),
      this.addCost
    );
  }

  add(composite: Composite | Composite[]) {
    if (Array.isArray(composite)) {
      this.childs = this.childs.concat(composite);
    } else {
      this.childs.push(composite);
    }
  }

  remove(composite: Composite) {
    const idxComposite = this.childs.indexOf(composite);
    this.childs.splice(idxComposite, 1);
  }
}
