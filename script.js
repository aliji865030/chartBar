const myChart = document.querySelector("#myChart");

console.log(myChart);

new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Fab", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Scale",
        data: [30, 40, 60, 45, 90, 75],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

anime({
  targets: "#myChart",
  translateY: 100,
  translateY: -50,
  translateX: 100,
  translateX: -50,
});