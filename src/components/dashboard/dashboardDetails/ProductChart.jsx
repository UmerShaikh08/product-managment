import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ProductChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average Rainfall",
      className: "bg-black",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
      className: "text-white ",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Rainfall (mm)",
      },
      className: "py-8",
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
      {
        name: "Tokyo",
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
      },

      {
        name: "Berlin",
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4],
      },
    ],
  };
  return (
    <div className=" sm:[70%] w-full md:w-[60%] lg:w-[40%]  rounded-md overflow-hidden">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProductChart;
