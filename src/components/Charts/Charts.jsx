import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

export default function Charts() {
  const [admissionsData, setAdmissionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = "BMDU " + localStorage.getItem("access_token");

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bmdu.depder.com/api/v1/root-dashboard/",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAdmissionsData(data.admissions || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let chart;

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
          },
        ],
        chart: {
          height: "60%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: { enabled: false },
          toolbar: { show: false },
        },
        tooltip: { enabled: true },
        legend: { show: true },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2", "#F44336", "#FFEB3B"],
          },
        },
        dataLabels: { enabled: false },
        stroke: { width: 6 },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: { left: 4, right: 4, top: 2 },
        },
        xaxis: {
          categories: years,
          labels: { show: true },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          show: true,
          labels: {
            formatter: (value) => value,
          },
        },
      };

      if (document.getElementById("data-series-chart")) {
        // Destroy the existing chart instance before rendering a new one
        if (chart) {
          chart.destroy();
        }
        chart = new ApexCharts(
          document.getElementById("data-series-chart"),
          options
        );
        chart.render();
      }
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [admissionsData]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="max-w-[98%] bg-white rounded-lg shadow dark:text-white dark:bg-gray-800/60 p-4 md:p-6 m-3">
      <div className="flex flex-col justify-between">
        <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
          Ýokary okuw mekdepleriniň statistikasy
        </h5>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-5">
          Umumy talyp sanlary
        </p>
      </div>
      <div id="data-series-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5"></div>
    </div>
  );
}
