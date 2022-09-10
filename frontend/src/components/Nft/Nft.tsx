import React, { FC } from 'react';
import styles from './Nft.module.css';

interface NftProps {}

const Nft: FC<NftProps> = () => (
  <div className={styles.Nft} data-testid="Nft">
    Nft Component
  </div>
);

export default Nft;
