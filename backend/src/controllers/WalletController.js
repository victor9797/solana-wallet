const { PublicKey } = require("@solana/web3.js");
const MetaplexConnector = require("../utils/MetaplexConnector");
require("dotenv").config();

const WalletController = {
  fetch: async function (req, res) {
    const mintAddress = new PublicKey(process.env.PUBLIC_KEY);
    const task = MetaplexConnector.nfts().findByMint({ mintAddress });
    const nft = await task.run();

    console.log(nft);

    res.json({ data: nft });
  },
};

module.exports = WalletController;
