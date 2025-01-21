import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

export default function Charts() {
  const [admissionsData, setAdmissionsData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/root-dashboard/")
      .then((response) => response.json())
      .then((data) => {
        setAdmissionsData(data.admissions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (admissionsData.length > 0) {
      const years = admissionsData.map((item) => item.year);
      const maleData = admissionsData.map((item) => item.male_students_count);
      const femaleData = admissionsData.map(
        (item) => item.female_students_count
      );

      const totalData = admissionsData.map(
        (item) => item.male_students_count + item.female_students_count
      );

      const options = {
        series: [
          {
            name: "Oglan talyplar",
            data: maleData,
            color: "#1A56DB",
          },
          {
            name: "Gyz talyplar",
            data: femaleData,
            color: "#F44336",
          },
          {
            name: "Jemi talyp sany",
            data: totalData,
            color: "#16C47F",
            stroke: {
              width: 4,
            },
          },
        ],
        chart: {
          height: "60%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        legend: {
          show: true,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2", "#F44336", "#FFEB3B"], // Adding yellow gradient
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 4,
            right: 4,
            top: 2,
          },
        },
        xaxis: {
          categories: years,
          labels: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            formatter: function (value) {
              return value;
            },
          },
        },
      };

      if (
        document.getElementById("data-series-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = new ApexCharts(
          document.getElementById("data-series-chart"),
          options
        );
        chart.render();
      }
    }
  }, [admissionsData]);

  return (
    <div className="max-w-[98%] bg-white rounded-lg shadow dark:bg-gray-800/60 p-4 md:p-6 m-3">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            Ýokary okuw mekdepleriniň statistikasy
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Umumy talyp sanlary
          </p>
        </div>
      </div>
      <div id="data-series-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
       
      </div>
    </div>
  );
}
