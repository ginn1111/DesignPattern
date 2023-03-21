export default interface Composite {
  getCost(): number;
  add?(composite: Composite | Composite[]): void;
  remove?(composite: Composite): void;
}
