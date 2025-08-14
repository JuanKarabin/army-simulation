export class NotEnoughGoldToTransformError extends Error {
  constructor(unitName: string, required: number, available: number) {
    super(
      `Not enough gold to transform "${unitName}". Required: ${required}, Available: ${available}.`
    );
    this.name = "NotEnoughGoldToTransformError";
  }
}
