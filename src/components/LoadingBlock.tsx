import React from 'react';

import styles from '../styles/LoadingBlock.module.scss';

interface LoadingBlockProps {
  message?: string;
}

const LoadingBlock: React.FC<LoadingBlockProps> = ({ message }) => {
  return <div className={styles.loadingBlock}>{message}</div>;
};

export default LoadingBlock;
