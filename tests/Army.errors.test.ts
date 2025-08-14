import { Army } from "../src/models/Army";
import { Civilization } from "../src/models/Civilization";
import { PikemanState } from "../src/units/states/PikemanState";
import { KnightState } from "../src/units/states/KnightState";
import { NotEnoughGoldToTrainError } from "../src/errors/NotEnoughGoldToTrainError";
import { UnitCannotBeTransformedError } from "../src/errors/UnitCannotBeTransformedError";
import { NotEnoughGoldToTransformError } from "../src/errors/NotEnoughGoldToTransformErrorv";

describe("Army error handling", () => {
  it("should throw NotEnoughGoldToTrainError when gold is insufficient", () => {
    const army = new Army(Civilization.ENGLISH);
    const pikeman = army.units.find(u => u.getState() instanceof PikemanState);
    if (!pikeman) throw new Error("No Pikeman found");

    army.gold = 5; // less than training cost

    expect(() => army.trainUnit(pikeman)).toThrow(NotEnoughGoldToTrainError);
  });

  it("should throw UnitCannotBeTransformedError when unit cannot transform", () => {
    const army = new Army(Civilization.ENGLISH);
    const knight = army.units.find(u => u.getState() instanceof KnightState);
    if (!knight) throw new Error("No Knight found");

    expect(() => army.transformUnit(knight)).toThrow(UnitCannotBeTransformedError);
  });

  it("should throw NotEnoughGoldToTransformError when gold is insufficient", () => {
    const army = new Army(Civilization.ENGLISH);
    const pikeman = army.units.find(u => u.getState() instanceof PikemanState);
    if (!pikeman) throw new Error("No Pikeman found");

    army.gold = 5; // less than transformation cost

    expect(() => army.transformUnit(pikeman)).toThrow(NotEnoughGoldToTransformError);
  });

});
