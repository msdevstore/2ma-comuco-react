import { FC } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface WeeklyMailsChartProps {
  data: {
    opened: number[],
    sent: number[],
  }
}

const WeeklyMailsChart: FC<WeeklyMailsChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: 'column',
    },
    credits: {
      enabled: false
    },
    legend: {
      symbolRadius: 0,
      verticalAlign: 'Top',
      itemDistance: 20,
      itemMarginBottom: 16
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      visible: false
    },
    tooltip: {
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'Opened',
        data: data.opened,
        color: '#9391a1'
      },
      {
        name: 'Sent',
        data: data.sent,
        color: '#444'
      }
    ],
    responsive: {
      rules: [
        {
          chartOptions: {
            legend: {
              align: 'center'
            }
          },
          condition: {
            maxWidth: 700,
          }
        }
      ]
    }
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default WeeklyMailsChart;
