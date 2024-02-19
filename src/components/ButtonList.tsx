import { FC } from 'react';

import ButtonComponent from './ButtonComponent';

import styles from '../styles/ButtonList.module.scss';

interface ButtonListProps {
  onSelectChart: (index: number) => void;
}

const ButtonList: FC<ButtonListProps> = ({ onSelectChart }) => {
  return (
    <div className={styles.buttonList}>
      <ButtonComponent label="$" onClick={() => onSelectChart(0)} />
      <ButtonComponent label="€" onClick={() => onSelectChart(1)} />
      <ButtonComponent label="¥" onClick={() => onSelectChart(2)} />
    </div>
  );
};

export default ButtonList;
