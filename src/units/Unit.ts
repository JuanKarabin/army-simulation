import { UnitState } from "./UnitState";

export class Unit {
  private state: UnitState;
  private age: number;

  constructor(state: UnitState, age: number = 0) {
    this.state = state;
    this.age = age;
  }

  get name(): string {
    return this.state.name;
  }

  get strength(): number {
    return this.state.strength;
  }

  getState(): UnitState {
    return this.state;
  }

  getAge(): number {
    return this.age;
  }


  train(): number {
    return this.state.train(this);
  }

  transform(): number {
    return this.state.transform(this);
  }

  changeState(newState: UnitState) {
    this.state = newState;
  }
}
