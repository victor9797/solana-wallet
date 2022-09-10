import React, { FC } from "react";
import styles from "./NftList.module.css";

interface NftListProps {}

const NftList: FC<NftListProps> = () => (
  <div className={styles.NftList} data-testid="NftList">
    NftList Component
  </div>
);

export default NftList;
