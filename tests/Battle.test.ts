import { Army } from "../src/models/Army";
import { Civilization } from "../src/models/Civilization";
import { Battle } from "../src/models/Battle";

describe("Battle fight method edge cases", () => {
  it("should set winner as defender when defendStrength > attackStrength", () => {
    const attacker = new Army(Civilization.ENGLISH);
    const defender = new Army(Civilization.BYZANTINE);

    const initialGoldDefender = defender.gold;
    
    const battle = new Battle(attacker, defender);
    battle.fight();

    expect(battle.winner).toBe(defender);
    expect(defender.gold).toBe(initialGoldDefender + 100);
    expect(attacker.units.length).toBe(28);
  });

  it("should remove 1 unit each in case of a tie", () => {
    const army1 = new Army(Civilization.ENGLISH);
    const army2 = new Army(Civilization.ENGLISH);

    const initialUnitsArmy1 = army1.units.length;
    const initialUnitsArmy2 = army2.units.length;

    const battle = new Battle(army1, army2);
    battle.fight();

    expect(battle.winner).toBeNull(); 
    expect(army1.units.length).toBe(initialUnitsArmy1 - 1);
    expect(army2.units.length).toBe(initialUnitsArmy2 - 1);
  });
});
