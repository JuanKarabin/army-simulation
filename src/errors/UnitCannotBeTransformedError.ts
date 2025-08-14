export class UnitCannotBeTransformedError extends Error {
  constructor(unitName: string) {
    super(`Unit "${unitName}" cannot be transformed.`);
    this.name = "UnitCannotBeTransformedError";
  }
}
