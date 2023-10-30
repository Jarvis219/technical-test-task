'use client'

import { IProfitByDay } from '@/types'
import { convertDateToMonth, formatNumber } from '@/utils'
import { memo, useMemo } from 'react'
import Chart from 'react-apexcharts'

interface ITooltipChartProps {
  series: never[]
  seriesIndex: number
  dataPointIndex: number
}

interface IProfitCardProps {
  profitByDay: IProfitByDay
}

const PortfolioChart = ({ profitByDay }: IProfitCardProps): JSX.Element => {
  const labels = Object.keys(profitByDay)

  const options = useMemo(
    () => ({
      chart: {
        id: 'chart',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        categories: labels.map(convertDateToMonth),
      },
      yaxis: {
        labels: {
          formatter: (val: number) => `${formatNumber(val)}`,
        },
      },
      tooltip: {
        custom: ({
          series,
          seriesIndex,
          dataPointIndex,
        }: ITooltipChartProps): string =>
          `<div class='p-2 bg-black text-white rounded shadow'>$ ${formatNumber(
            series[seriesIndex][dataPointIndex]
          )}</div>`,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.9,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              width: 550,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: 750,
            },
          },
        },
      ],
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    }),
    [labels]
  )

  const series = useMemo(
    () => [
      {
        data: Object.values(profitByDay)?.map((val) => +Number(val).toFixed(2)),
      },
    ],
    [profitByDay]
  )

  return (
    <div className='mt-2'>
      <Chart options={options} series={series} type='area' height={600} />
    </div>
  )
}

export default memo(PortfolioChart)
