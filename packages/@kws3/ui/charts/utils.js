import ApexCharts from "apexcharts/dist/apexcharts.esm";

const themeColors = [
  "#284BED",
  "#ED6134",
  "#1DAFEC",
  "#EDB405",
  "#11EDB7",
  "#77ED11",
];

export const merge = ApexCharts.merge;

export function pieChartOptions(labels, is_sparkline) {
  return {
    chart: {
      type: "pie",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: is_sparkline ? true : false,
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
      theme: false,
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

export function donutChartOptions(labels, is_sparkline) {
  var obj = pieChartOptions(labels, is_sparkline);
  obj.chart.type = "donut";
  return obj;
}

export function mixedChartOptions(xAxis, yAxis, is_sparkline) {
  return {
    chart: {
      type: "bar",
      stacked: false,
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: is_sparkline ? true : false,
      },
    },
    colors: themeColors,
    fill: {
      opacity: 1,
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
    },
    grid: {
      clipMarkers: false,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 1,
      shape: "circle",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    tooltip: {
      shared: is_sparkline ? false : true,
      intersect: false,
      x: {
        show: is_sparkline ? true : false,
      },
      y: [
        {},
        {
          formatter: undefined,
        },
      ],
      fixed: {
        enabled: is_sparkline ? false : true,
        position: "topLeft",
        offsetY: 10,
        offsetX: 25,
      },
      theme: false,
    },
    xaxis: {
      categories: xAxis,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: yAxis,
    stroke: {
      width: 2,
      curve: "smooth",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 8,
        height: 8,
        radius: 8,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
    },
  };
}

export function barChartOptions(xAxis, yAxis, is_sparkline) {
  let opts = mixedChartOptions(xAxis, yAxis, is_sparkline);
  opts.chart.type = "bar";
  opts.plotOptions.bar.horizontal = true;
  return opts;
}
