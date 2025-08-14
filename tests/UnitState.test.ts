import { Unit } from "../src/units/Unit";
import { ArcherState } from "../src/units/states/ArcherState";
import { KnightState } from "../src/units/states/KnightState";

describe("UnitState logic", () => {
  it("ArcherState train should increase strength and return correct cost", () => {
    const unit = new Unit(new ArcherState());
    const initialStrength = unit.strength;

    const cost = unit.train();

    expect(cost).toBe(20);
    expect(unit.strength).toBe(initialStrength + 7);
  });

  it("ArcherState transform should change state to KnightState and return correct cost", () => {
    const unit = new Unit(new ArcherState());

    const cost = unit.transform();

    expect(cost).toBe(40);
    expect(unit.getState()).toBeInstanceOf(KnightState);
    expect(unit.name).toBe("Knight");
  });

  it("KnightState train should increase strength and return correct cost", () => {
    const unit = new Unit(new KnightState());
    const initialStrength = unit.strength;

    const cost = unit.train();

    expect(cost).toBe(30);
    expect(unit.strength).toBe(initialStrength + 10);
  });

  it("KnightState transform should return 0 and not change state", () => {
    const unit = new Unit(new KnightState());
    const initialState = unit.getState();
    const initialName = unit.name;

    const cost = unit.transform();

    expect(cost).toBe(0);
    expect(unit.getState()).toBe(initialState);
    expect(unit.name).toBe(initialName);
  });

  it("KnightState getAge should return the correct age", () => {
    const unit = new Unit(new KnightState(), 7);
    expect(unit.getAge()).toBe(7);
  });
});
