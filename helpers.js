async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log(` █████╗ ███████╗██╗   ██╗███╗   ██╗ ██████╗`));
  console.log(`██╔══██╗██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝`));
  console.log(`███████║███████╗ ╚████╔╝ ██╔██╗ ██║██║      `));
  console.log(`██╔══██║╚════██║  ╚██╔╝  ██║╚██╗██║██║      `));
  console.log(`██║  ██║███████║   ██║   ██║ ╚████║╚██████╔ `));
  console.log(`╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝ `));
  console.log(`               JOIN AIRDROP         `));
  console.log(`      https://t.me/AirdropSyncReborn `));
}

module.exports = {
  delay,
  displayHeader,
};
