var tempCanvas = document.getElementById('tempChart');

Chart.defaults.global.defaultFontFamily = 'lato';
Chart.defaults.global.defaultFontSize = 15;

var monthData = {
  labels: [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Daytime Avg High Temperature in ºC',
      data: [30, 31, 31, 31, 30, 29, 29, 28, 29, 29, 30, 30],
    },
  ],
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 50,
      fontColor: 'black',
    },
  },
};

var lineChart = new Chart(tempCanvas, {
  type: 'line',
  data: monthData,
  options: chartOptions,
});
