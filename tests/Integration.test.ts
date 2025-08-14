import { Army } from "../src/models/Army";
import { Civilization } from "../src/models/Civilization";
import { Battle } from "../src/models/Battle";
import { PikemanState } from "../src/units/states/PikemanState";


describe("Army attack and battle flow", () => {
  it("should create a battle, update gold, battle history, and handle training/transform", () => {
    const englishAttacker = new Army(Civilization.ENGLISH);
    const chineseDefender = new Army(Civilization.CHINESE);

    // Train a Pikeman (cost 10)
    const pikeman = englishAttacker.units.find(u => u.getState() instanceof PikemanState);
    if (!pikeman) throw new Error("No Pikeman found");
    englishAttacker.trainUnit(pikeman);

    // Transform a Archer into a Knight (cost 40)
    const archer = englishAttacker.units.find(u => u.getState().name === "Archer");
    if (!archer) throw new Error("No Archer found");
    englishAttacker.transformUnit(archer);

    // Now the gold should be 1000 - 10 - 40 = 950
    expect(englishAttacker.gold).toBe(950);

    // Attack
    const battle = englishAttacker.attack(chineseDefender);

    expect(battle).toBeInstanceOf(Battle);
    expect(battle.winner).toBe(englishAttacker);

    // Gold after winning the battle: 950 + 100 = 1050
    expect(englishAttacker.gold).toBe(1050);

    // Defender loses 2 units
    expect(chineseDefender.units.length).toBe(
      Civilization.CHINESE.initialPikemen +
      Civilization.CHINESE.initialArchers +
      Civilization.CHINESE.initialKnights - 2
    );

    // Both armies record the battle
    expect(englishAttacker.battleHistory).toContain(battle);
    expect(chineseDefender.battleHistory).toContain(battle);
  });
});
