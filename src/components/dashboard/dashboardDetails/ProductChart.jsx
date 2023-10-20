import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dept } from "../../../utils/data";

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
    },

    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      { name: "Total", data: total ? total : 0 },
      { name: "Closed", data: closed ? closed : 0 },
    ],
    stacklabels: {
      enabled: true,
      allowoverlap: true,
      rotation: 0,
      style: {
        fontweight: "bold",
        fontsize: "9px",
      },
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
