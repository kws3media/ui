export function pieChartOptions(labels: any, is_sparkline: any): {
    chart: {
        type: string;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    stroke: {
        width: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    dataLabels: {
        enabled: boolean;
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        fillSeriesColor: boolean;
        x: {
            show: boolean;
            formatter: any;
        };
        theme: boolean;
    };
    labels: any;
    legend: {
        position: string;
        horizontalAlign: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            size: number;
            shape: string;
        };
    };
};
export function donutChartOptions(labels: any, is_sparkline: any): {
    chart: {
        type: string;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    stroke: {
        width: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    dataLabels: {
        enabled: boolean;
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        fillSeriesColor: boolean;
        x: {
            show: boolean;
            formatter: any;
        };
        theme: boolean;
    };
    labels: any;
    legend: {
        position: string;
        horizontalAlign: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            size: number;
            shape: string;
        };
    };
};
export function radialChartOptions(labels: any, startAngle: any, endAngle: any, is_sparkline: any): {
    chart: {
        type: string;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    stroke: {
        width: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    dataLabels: {
        enabled: boolean;
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        fillSeriesColor: boolean;
        x: {
            show: boolean;
            formatter: any;
        };
        theme: boolean;
    };
    labels: any;
    legend: {
        position: string;
        horizontalAlign: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            size: number;
            shape: string;
        };
    };
};
export function mixedChartOptions(xAxis: any, yAxis: any, is_sparkline: any): {
    chart: {
        type: string;
        stacked: boolean;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
        zoom: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    grid: {
        clipMarkers: boolean;
    };
    dataLabels: {
        enabled: boolean;
    };
    markers: {
        size: number;
        shape: string;
        strokeWidth: number;
        hover: {
            sizeOffset: number;
        };
    };
    plotOptions: {
        bar: {
            horizontal: boolean;
        };
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        x: {
            show: boolean;
        };
        y: ({
            formatter?: undefined;
        } | {
            formatter: any;
        })[];
        fixed: {
            enabled: boolean;
            position: string;
            offsetY: number;
            offsetX: number;
        };
        theme: boolean;
    };
    xaxis: {
        categories: any;
        axisBorder: {
            show: boolean;
        };
        axisTicks: {
            show: boolean;
        };
    };
    yaxis: any;
    stroke: {
        width: number;
        curve: string;
    };
    legend: {
        position: string;
        horizontalAlign: string;
        fontSize: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            width: number;
            height: number;
            radius: number;
        };
        itemMargin: {
            horizontal: number;
            vertical: number;
        };
    };
};
export function barChartOptions(xAxis: any, yAxis: any, is_sparkline: any, is_horizontal: any, is_distributed: any, is_stacked: any, is_stacked_full: any): {
    chart: {
        type: string;
        stacked: boolean;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
        zoom: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    grid: {
        clipMarkers: boolean;
    };
    dataLabels: {
        enabled: boolean;
    };
    markers: {
        size: number;
        shape: string;
        strokeWidth: number;
        hover: {
            sizeOffset: number;
        };
    };
    plotOptions: {
        bar: {
            horizontal: boolean;
        };
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        x: {
            show: boolean;
        };
        y: ({
            formatter?: undefined;
        } | {
            formatter: any;
        })[];
        fixed: {
            enabled: boolean;
            position: string;
            offsetY: number;
            offsetX: number;
        };
        theme: boolean;
    };
    xaxis: {
        categories: any;
        axisBorder: {
            show: boolean;
        };
        axisTicks: {
            show: boolean;
        };
    };
    yaxis: any;
    stroke: {
        width: number;
        curve: string;
    };
    legend: {
        position: string;
        horizontalAlign: string;
        fontSize: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            width: number;
            height: number;
            radius: number;
        };
        itemMargin: {
            horizontal: number;
            vertical: number;
        };
    };
};
export function lineChartOptions(xAxis: any, yAxis: any, is_sparkline: any): {
    chart: {
        type: string;
        stacked: boolean;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
        zoom: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    grid: {
        clipMarkers: boolean;
    };
    dataLabels: {
        enabled: boolean;
    };
    markers: {
        size: number;
        shape: string;
        strokeWidth: number;
        hover: {
            sizeOffset: number;
        };
    };
    plotOptions: {
        bar: {
            horizontal: boolean;
        };
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        x: {
            show: boolean;
        };
        y: ({
            formatter?: undefined;
        } | {
            formatter: any;
        })[];
        fixed: {
            enabled: boolean;
            position: string;
            offsetY: number;
            offsetX: number;
        };
        theme: boolean;
    };
    xaxis: {
        categories: any;
        axisBorder: {
            show: boolean;
        };
        axisTicks: {
            show: boolean;
        };
    };
    yaxis: any;
    stroke: {
        width: number;
        curve: string;
    };
    legend: {
        position: string;
        horizontalAlign: string;
        fontSize: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            width: number;
            height: number;
            radius: number;
        };
        itemMargin: {
            horizontal: number;
            vertical: number;
        };
    };
};
export function areaChartOptions(xAxis: any, yAxis: any, is_sparkline: any): {
    chart: {
        type: string;
        stacked: boolean;
        dropShadow: {
            enabled: boolean;
        };
        toolbar: {
            show: boolean;
        };
        sparkline: {
            enabled: boolean;
        };
        zoom: {
            enabled: boolean;
        };
    };
    colors: string[];
    fill: {
        opacity: number;
    };
    states: {
        active: {
            filter: {
                type: string;
            };
        };
    };
    grid: {
        clipMarkers: boolean;
    };
    dataLabels: {
        enabled: boolean;
    };
    markers: {
        size: number;
        shape: string;
        strokeWidth: number;
        hover: {
            sizeOffset: number;
        };
    };
    plotOptions: {
        bar: {
            horizontal: boolean;
        };
    };
    tooltip: {
        shared: boolean;
        intersect: boolean;
        x: {
            show: boolean;
        };
        y: ({
            formatter?: undefined;
        } | {
            formatter: any;
        })[];
        fixed: {
            enabled: boolean;
            position: string;
            offsetY: number;
            offsetX: number;
        };
        theme: boolean;
    };
    xaxis: {
        categories: any;
        axisBorder: {
            show: boolean;
        };
        axisTicks: {
            show: boolean;
        };
    };
    yaxis: any;
    stroke: {
        width: number;
        curve: string;
    };
    legend: {
        position: string;
        horizontalAlign: string;
        fontSize: string;
        labels: {
            useSeriesColors: boolean;
        };
        markers: {
            width: number;
            height: number;
            radius: number;
        };
        itemMargin: {
            horizontal: number;
            vertical: number;
        };
    };
};
export function merge(target: any, source: any): any;
//# sourceMappingURL=utils.d.ts.map