// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = window.innerWidth / 2 - e.pageX;
  let yAxis = window.innerHeight / 2 - e.pageY;
  let divider = 10;
  xAxis = xAxis / divider;
  yAxis = yAxis / divider;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  console.log(xAxis, yAxis);
});

// Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  // Popout
  title.style.transform = 'translateZ(150px)';
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = 'all 0.5s ease';

  // Popback
  title.style.transform = 'translateZ(0)';
});
