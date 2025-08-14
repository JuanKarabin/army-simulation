import { Unit } from "../Unit";
import { UnitState } from "../UnitState";
import { KnightState } from "./KnightState";

export class ArcherState implements UnitState {
  name = "Archer";
  strength = 10;

  train(unit: Unit): number {
    this.strength += 7;
    return 20;
  }

  transform(unit: Unit): number {
    unit.changeState(new KnightState());
    return 40;
  }
}
