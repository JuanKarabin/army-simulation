# Army Simulation Exercise

Welcome! This project is an Army Simulation exercise built in TypeScript.  
It models armies, units, and battles, using the **State design pattern** to handle different unit behaviors.

## What This Project Does
- Create armies from different civilizations.
- Train and transform units to make your army stronger.
- Simulate battles between armies, even from the same civilization.
- Track battle history and resources (like gold) for each army.

## Requirements
- Node.js >= 18
- npm (v9 or higher recommended)
  
Make sure you have Node.js and npm installed before running the project.

## Installation
Clone the repository and install dependencies:

```bash
npm install
```

## Running Tests
To run all tests and generate a coverage report:

```bash
npm test
```

## Project Structure
- `src/` - Main TypeScript code (models, units, states, errors)  
- `tests/` - Jest test files for testing the code
- `coverage/` - Generated test coverage reports  

## Notes
- The project uses **TypeScript** with **Jest** for testing.  
- Coverage reports include both line and branch coverage.  
- In case of a tie during a battle, both armies lose their strongest unit.
