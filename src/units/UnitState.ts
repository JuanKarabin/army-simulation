import { Unit } from "./Unit";

export interface UnitState {
  readonly name: string;
  strength: number;
  train(unit: Unit): number; // return cost
  transform(unit: Unit): number; // return cost
}
