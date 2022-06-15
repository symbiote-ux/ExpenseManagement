const fs = require('fs');
const os = require('os');
const process = require('process');
const { parseInput } = require('./src/utils');
const ExpanseCalculator = require('./src/expanseCalculator');

const main = () => {
  const fileName = process.argv[2];
  const input = fs.readFileSync(fileName, 'utf8').split(os.EOL);
  const commands = parseInput(input);
  const expanseCalculator = new ExpanseCalculator(commands);
  const output = expanseCalculator.runCommands();
  console.log(output);
};

main();
