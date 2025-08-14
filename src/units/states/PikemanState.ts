import { Unit } from "../Unit";
import { UnitState } from "../UnitState";
import { ArcherState } from "./ArcherState";

export class PikemanState implements UnitState {
  name = "Pikeman";
  strength = 5;

  train(unit: Unit): number {
    this.strength += 3;
    return 10;
  }

  transform(unit: Unit): number {
    unit.changeState(new ArcherState());
    return 30;
  }
}
