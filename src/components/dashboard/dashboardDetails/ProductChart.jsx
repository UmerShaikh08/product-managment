import HighchartsReact from "highcharts-react-official";
import { Dept } from "../../../utils/data";
import Highcharts, { color } from "highcharts";
import React, { useEffect, useState } from "react";

const ProductChart = ({ total, closed }) => {
  const option = {
    chart: {
      type: "column",
    },

    title: {
      style: {
        color: "#1374CD",
        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
      },
      text: "Total vs Closed",
    },
    xAxis: {
      categories: Dept,
      crosshair: true,
      labels: {
        style: {
          color: "#544FC5",
        },
      },
    },
    yAxis: {
      stacklabels: {
        enabled: true,
        allowoverlap: true,
        rotation: 0,
        style: {
          fontweight: "bold",
          fontsize: "9px",
        },
      },
      labels: {
        style: {
          color: "#544FC5",
        },
      },
    },

    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      itemStyle: {
        color: "#0CC9E8",
      },
    },
    series: [
      { name: "Total", data: total ? total : 0, color: "#025AAB" },
      { name: "Closed", data: closed ? closed : 0, color: "#5AA647" },
    ],
    accessibility: {
      enabled: false,
    },
  };

  const [chartOptions, setChartOptions] = useState(option);

  useEffect(() => {
    setChartOptions(option);
  }, [total, closed]);

  return (
    <div className=" sm:[70%] w-full md:w-[60%] lg:w-[40%]  rounded-md overflow-hidden">
      <HighchartsReact
        style={true}
        highcharts={Highcharts}
        options={chartOptions}
        immutable={true}
      />
    </div>
  );
};

export default ProductChart;
