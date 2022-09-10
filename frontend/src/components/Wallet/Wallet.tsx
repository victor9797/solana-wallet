import React, { FC } from "react";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import NftList from "../NftList/NftList";
import Context from "./Context/Context";

// Default styles that can be overridden
require("@solana/wallet-adapter-react-ui/styles.css");

interface WalletProps {}

const Wallet: FC<WalletProps> = (props: any) => {
  return (
    <Context>
      <WalletMultiButton />
      <WalletDisconnectButton />
      <NftList></NftList>
    </Context>
  );
};

export default Wallet;
