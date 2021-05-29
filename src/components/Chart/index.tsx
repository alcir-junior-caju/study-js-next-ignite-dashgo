import { theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { memo } from 'react';

const ChartApex = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

type ChartData = {
  name: string;
  data: number[];
};

interface ChartProps {
  data: ChartData[];
};

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    colors: [theme.colors.pink[500], theme.colors.pink[900]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  stroke: {
    colors: [theme.colors.pink[500]],
  }
};


const ChartComponent = ({ data }: ChartProps) => {
  return (
    <ChartApex options={options} series={data} type="area" height={160} />
  );
};

export const Chart = memo(ChartComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
