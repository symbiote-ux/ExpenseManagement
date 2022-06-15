class ExpanseCalculator {
  constructor(commands) {
    this.commands = commands;
    this.house = [];
  }
  moveIn(companion) {
    if (this.house.length < 3) {
      let tenant = {};
      tenant.name = companion;
      this.house.push(tenant);
      return 1;
    }
    return 0;
  }
  runCommands() {
    for (let i = 0; i < this.commands.length; i++) {
      if (this.commands[i][0] == 'MOVE_IN') {
        return this.moveIn(this.commands[i][1]);
      }
      // if (command[0] == 'SPEND') return this.spend();
      // if (command[0] == 'DUES') return this.getDues();
      // if (command[0] == 'CLEAR_DUE') return this.clearDue();
      // if (command[0] == 'MOVE_OUT') return this.moveOut();
    }
  }
}

module.exports = ExpanseCalculator;
