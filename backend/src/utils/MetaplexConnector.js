const { Metaplex } = require("@metaplex-foundation/js");
const { Connection, clusterApiUrl } = require("@solana/web3.js");
require('dotenv').config();

const solanaEnv = process.env.SOLANA_ENV || 'devnet';

const connection = new Connection(clusterApiUrl(solanaEnv));
const metaplex = new Metaplex(connection);

module.exports = metaplex;