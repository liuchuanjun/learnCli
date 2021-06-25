const program = require('commander')

const { creatProjectAction } = require('./action')

const creatCommands = () => {

  program
    .command("create <project> [other...]")
    .description("clone a repository into a folder")
    .action(creatProjectAction);
}

module.exports = creatCommands
