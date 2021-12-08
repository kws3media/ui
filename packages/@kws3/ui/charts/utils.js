import ApexCharts from "apexcharts";

const themeColors = [
  "#00aec1",
  "#ec6726",
  "#f39db1",
  "#f5cc54",
  "#C5D86D",
  "#534572",
];

export const merge = ApexCharts.merge;

export function pieChartOptions(labels) {
  return {
    chart: {
      type: "pie",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: themeColors,
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 0,
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      fillSeriesColor: false,
      x: {
        show: true,
        formatter: undefined,
      },
      theme: "dark",
    },
    labels: labels,
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 3,
        shape: "circle",
      },
    },
  };
}

export function donutChartOptions(labels) {
  var obj = pieChartOptions(labels);
  obj.chart.type = "donut";
  return obj;
}
