import { Unit } from "../Unit";
import { UnitState } from "../UnitState";

export class KnightState implements UnitState {
  name = "Knight";
  strength = 20;

  train(unit: Unit): number {
    this.strength += 10;
    return 30;
  }

  transform(unit: Unit): number {
    return 0;
  }
}
