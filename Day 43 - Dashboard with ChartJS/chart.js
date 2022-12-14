var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Facebook', 'Youtube', 'Amazon'],
    datasets: [
      {
        label: 'Traffic Source',
        data: [1200, 1900, 3000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.71)',
          'rgba(54, 162, 235, 0.71)',
          'rgba(255, 206, 86, 0.71)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart2 = new Chart(earning, {
  type: 'bar',
  data: {
    labels: [
      'January',
      'February',
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
        label: 'Earning',
        data: [
          1200, 1090, 3000, 5400, 1220, 3600, 4800, 4578, 2556, 8545, 4578,
          9000,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.71)',
          'rgba(54, 162, 235, 0.71)',
          'rgba(255, 206, 86, 0.71)',
          'rgba(75, 192, 192, 0.71)',
          'rgba(153, 102, 255, 0.71)',
          'rgba(255, 159, 64, 0.71)',
          'rgba(255, 99, 132, 0.71)',
          'rgba(54, 162, 235, 0.71)',
          'rgba(255, 206, 86, 0.71)',
          'rgba(75, 192, 192, 0.71)',
          'rgba(153, 102, 255, 0.71)',
          'rgba(255, 159, 64, 0.71)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
