export class Civilization {
  name: string;
  initialPikemen: number;
  initialArchers: number;
  initialKnights: number;

  constructor({
    name,
    initialPikemen,
    initialArchers,
    initialKnights
  }: {
    name: string;
    initialPikemen: number;
    initialArchers: number;
    initialKnights: number;
  }) {
    this.name = name;
    this.initialPikemen = initialPikemen;
    this.initialArchers = initialArchers;
    this.initialKnights = initialKnights;
  }

  static CHINESE = new Civilization({name: "Chinese", initialPikemen: 2, initialArchers: 25, initialKnights: 2});
  static ENGLISH = new Civilization({name: "English", initialPikemen: 10, initialArchers: 10, initialKnights: 10});
  static BYZANTINE = new Civilization({name: "Byzantine", initialPikemen: 5, initialArchers: 8, initialKnights: 15});

}
