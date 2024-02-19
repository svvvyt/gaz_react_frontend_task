import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ButtonList,
  MainLayout,
  ReactECharts,
  LoadingBlock,
} from './components';

import { IChartData } from './types/IChartData';

function App() {
  const [chartData, setChartData] = useState<IChartData>();
  const [selectedChartIndex, setSelectedChartIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchChartData = async (index: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://65d23192987977636bfc1159.mockapi.io/chartOptions'
      );
      setChartData(response.data[index]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData(selectedChartIndex);
  }, [selectedChartIndex]);

  const handleSelectChart = (index: number) => {
    setSelectedChartIndex(index);
  };

  return (
    <div>
      <MainLayout>
        <ButtonList onSelectChart={handleSelectChart} />
        {loading ? (
          <LoadingBlock message="Loading chart data..." />
        ) : (
          <ReactECharts chartData={chartData} />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
