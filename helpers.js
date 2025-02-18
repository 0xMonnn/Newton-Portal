const colors = require("colors");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const displayHeader = () => {
  process.stdout.write("\x1Bc");
  console.log(" █████╗ ███████╗██╗   ██╗███╗   ██╗ ██████╗".cyan);
  console.log("██╔══██╗██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝".cyan);
  console.log("███████║███████╗ ╚████╔╝ ██╔██╗ ██║██║      ".cyan);
  console.log("██╔══██║╚════██║  ╚██╔╝  ██║╚██╗██║██║      ".cyan);
  console.log("██║  ██║███████║   ██║   ██║ ╚████║╚██████╔ ".cyan);
  console.log("╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝ ".cyan);
  console.log("               JOIN AIRDROP         ".cyan);
  console.log("      https://t.me/AirdropSyncReborn ".cyan);
};

module.exports = { delay, displayHeader };
