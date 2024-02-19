import React, { FC } from 'react';

import styles from '../styles/MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
