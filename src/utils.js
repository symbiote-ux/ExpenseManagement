const parseInput = (input) => {
  const commands = input.map((unit) => unit.split(' '));
  return commands;
};

module.exports = { parseInput };
