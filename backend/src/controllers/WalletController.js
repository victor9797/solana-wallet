const { PublicKey } = require("@solana/web3.js");
const MetaplexConnector = require("../utils/MetaplexConnector");
require("dotenv").config();

let response = {
  status: "success",
  code: 200,
  data: [],
  message: null,
};

const WalletController = {
  fetch: async function (req, res) {
    const key = new PublicKey(process.env.PUBLIC_KEY);
    const list = await MetaplexConnector.nfts()
      .findAllByOwner({ owner: key })
      .run();

    response = {
      status: "success",
      code: 200,
      data: list,
      message: null,
    };

    res.send(response);
  },
};

module.exports = WalletController;
