import { FC, useEffect, useState } from 'react';

import { CalculateAverage } from '../utils/CalculateAverage';

import styles from '../styles/AvgCurrency.module.scss';

interface AvgCurrencyProps {
  currencyData: number[];
  currency: string;
}

const AvgCurrency: FC<AvgCurrencyProps> = ({ currencyData, currency }) => {
  const [averageValue, setAverageValue] = useState<number>(0);

  useEffect(() => {
    const avgValue = CalculateAverage(currencyData);
    setAverageValue(avgValue);
  }, [currencyData]);

  return (
    <div className={styles.avgCurrency}>
      Среднее за период: <span>{averageValue.toFixed(1)}</span> {currency}
    </div>
  );
};

export default AvgCurrency;
