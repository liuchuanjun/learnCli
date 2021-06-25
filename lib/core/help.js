
const program = require('commander')

const helpOptions = () =>{

  program.option("-l --lcj", "a lcj cli");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如: -d /src/components"
  );

  program.on("--help", () => {
    console.log("");
    console.log("other:");
    console.log(" other options-");
  });
}

module.exports = helpOptions
