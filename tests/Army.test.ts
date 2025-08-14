import { Army } from "../src/models/Army";
import { Civilization } from "../src/models/Civilization";
import { Unit } from "../src/units/Unit";

describe("Army", () => {
  it("should create an English army with correct initial units and gold", () => {
    const army = new Army(Civilization.ENGLISH);

    expect(army.gold).toBe(1000);

    expect(army.units.filter(u => u["name"] === "Pikeman")).toHaveLength(10);
    expect(army.units.filter(u => u["name"] === "Archer")).toHaveLength(10);
    expect(army.units.filter(u => u["name"] === "Knight")).toHaveLength(10);

    expect(army.civilization.name).toBe("English");
  });

  it("should calculate total strength correctly", () => {
    const army = new Army(Civilization.CHINESE);

    // Chinese : 2 pikemen (5 pts each), 25 archers (10 pts each), 2 knights (20 pts each)
    const expectedStrength = (2 * 5) + (25 * 10) + (2 * 20);
    expect(army.totalStrength()).toBe(expectedStrength);
  });

  it("should reduce gold when training a unit", () => {
    const army = new Army(Civilization.BYZANTINE);
    const pikeman = army.units.find(u => u["name"] === "Pikeman") as Unit;

    if (!pikeman) throw new Error("No Pikeman found");

    const initialGold = army.gold;
    army.trainUnit(pikeman);

    expect(army.gold).toBe(initialGold - 10); // training cost
    expect(pikeman.strength).toBe(5 + 3); // increased strength
  });

  it("should transform a Pikeman into an Archer", () => {
    const army = new Army(Civilization.ENGLISH);
    const pikeman = army.units.find(u => u["name"] === "Pikeman") as Unit;

    if (!pikeman) throw new Error("No Pikeman found");

    const initialGold = army.gold;
    army.transformUnit(pikeman);

    expect(army.gold).toBe(initialGold - 30);
    expect(pikeman.name).toBe("Archer"); // Same instance, new state
    expect(pikeman.strength).toBe(10); // Base strength of archer
  });

  
});
