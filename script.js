const ctx = document.getElementById('myChart');
const paragr = document.querySelector('.para');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'Sep', 'Oct'],
    datasets: [{
      label: 'Number of Sales',
      data: [12, 19, 3, 5, 2, 3,34,3,23,21],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




anime({
    targets: paragr,
    innerHTML: [0, 34],
    easing: 'linear',
    round: 10 // Will round the animated value to 1 decimal
  });


















