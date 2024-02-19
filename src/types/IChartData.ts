export interface IChartData {
  legend: {
    data: string[];
  };
  title: {
    text: string;
  };
  tooltip: {
    trigger: string;
  };
  xAxis: {
    name: string;
    data: string[];
  };
  yAxis: {
    name: string;
  };
  series: {
    name: string;
    type: string;
    data: number[];
  }[];
}
