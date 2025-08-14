import { Civilization } from "./Civilization";
import { Unit } from "../units/Unit";
import { PikemanState } from "../units/states/PikemanState";
import { ArcherState } from "../units/states/ArcherState";
import { KnightState } from "../units/states/KnightState";
import { Battle } from "./Battle";
import { NotEnoughGoldToTrainError } from "../errors/NotEnoughGoldToTrainError";
import { UnitCannotBeTransformedError } from "../errors/UnitCannotBeTransformedError";
import { NotEnoughGoldToTransformError } from "../errors/NotEnoughGoldToTransformErrorv";

export class Army {
  civilization: Civilization;
  units: Unit[] = [];
  gold: number = 1000;
  battleHistory: Battle[] = [];

  constructor(civilization: Civilization) {
    this.civilization = civilization;

    for (let i = 0; i < civilization.initialPikemen; i++) this.units.push(new Unit(new PikemanState()));
    for (let i = 0; i < civilization.initialArchers; i++) this.units.push(new Unit(new ArcherState()));
    for (let i = 0; i < civilization.initialKnights; i++) this.units.push(new Unit(new KnightState()));
  }

  totalStrength(): number {
    return this.units.reduce((sum, unit) => sum + unit.strength, 0);
  }

  trainUnit(unit: Unit) {
    const cost = unit.train();
    if (this.gold < cost) {
      throw new NotEnoughGoldToTrainError(unit.name, cost, this.gold);
    }
    this.gold -= cost;
  }

  transformUnit(unit: Unit) {
    const cost = unit.transform();
    if (cost === 0) {
      throw new UnitCannotBeTransformedError(unit.name);
    }
    if (this.gold < cost) {
      throw new NotEnoughGoldToTransformError(unit.name, cost, this.gold);
    }
    this.gold -= cost;
  }


  addBattle(battle: Battle) {
    this.battleHistory.push(battle);
  }

  removeTopUnits(count: number) {
    this.units.sort((a, b) => b.strength - a.strength);
    this.units.splice(0, count);
  }


  attack(defender: Army) {
    const battle = new Battle(this, defender);
    battle.fight();
    return battle;
  }

  reward(amount: number) {
    this.gold += amount;
  }

}