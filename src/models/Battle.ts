import { Army } from "./Army";

export class Battle {
  attacker: Army;
  defender: Army;
  winner: Army | null = null;

  constructor(attacker: Army, defender: Army) {
    this.attacker = attacker;
    this.defender = defender;
  }

  fight() {
    const attackStrength = this.attacker.totalStrength();
    const defendStrength = this.defender.totalStrength();

    if (attackStrength > defendStrength) {
      this.winner = this.attacker;
      this.attacker.reward(100);
      this.defender.removeTopUnits(2);
    } else if (defendStrength > attackStrength) {
      this.winner = this.defender;
      this.defender.reward(100);
      this.attacker.removeTopUnits(2);
    } else {
      this.attacker.removeTopUnits(1);
      this.defender.removeTopUnits(1);
    }

    // record the battle in both armies
    this.attacker.addBattle(this);
    this.defender.addBattle(this);
  }

}
