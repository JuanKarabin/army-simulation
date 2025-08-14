export class NotEnoughGoldToTrainError extends Error {
  constructor(unitName: string, required: number, available: number) {
    super(
      `Not enough gold to train "${unitName}". Required: ${required}, Available: ${available}.`
    );
    this.name = "NotEnoughGoldToTrainError";
  }
}
