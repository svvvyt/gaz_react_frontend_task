import React, { useEffect, useRef, FC, useState } from 'react';
import * as echarts from 'echarts';
import { ECharts } from 'echarts';
import type { CSSProperties } from 'react';

import { IOnEvents } from '../types/IOnEvents';

import AvgCurrency from './AvgCurrency';

export interface ReactEChartsProps {
  onEvents?: IOnEvents;
  style?: CSSProperties;
  settings?: echarts.SetOptionOpts;
  loading?: boolean;
  theme?: 'light' | 'dark';
  forceResize?: boolean;
  chartData: any;
}

const ReactECharts: FC<ReactEChartsProps> = ({
  style,
  settings,
  loading,
  theme,
  chartData,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [currencyTo, setCurrencyTo] = useState('');

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = echarts.init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null && chartData) {
      const chart = echarts.getInstanceByDom(chartRef.current);
      chart?.setOption(chartData, settings);
    } else {
      console.log('fuck');
    }
  }, [chartData, settings, theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = echarts.getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return (
    <>
      {chartData && (
        <>
          <div
            ref={chartRef}
            style={{ width: '100%', height: '100%', ...style }}
          />
          <div>
            <AvgCurrency
              currencyData={chartData?.series[0].data}
              currency={currencyTo}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ReactECharts;
