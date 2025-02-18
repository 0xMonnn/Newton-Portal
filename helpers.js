async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log(chalk.cyan.bold(` █████╗ ███████╗██╗   ██╗███╗   ██╗ ██████╗`));
  console.log(chalk.cyan.bold(`██╔══██╗██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝`));
  console.log(chalk.cyan.bold(`███████║███████╗ ╚████╔╝ ██╔██╗ ██║██║      `));
  console.log(chalk.cyan.bold(`██╔══██║╚════██║  ╚██╔╝  ██║╚██╗██║██║      `));
  console.log(chalk.cyan.bold(`██║  ██║███████║   ██║   ██║ ╚████║╚██████╔ `));
  console.log(chalk.cyan.bold(`╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝ `));
  console.log(chalk.cyan.bold(`               JOIN AIRDROP         `));
  console.log(chalk.cyan.bold(`      https://t.me/AirdropSyncReborn `));
}

module.exports = {
  delay,
  displayHeader,
};
