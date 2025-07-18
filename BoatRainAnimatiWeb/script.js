const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flash = document.getElementById('flash');
let drops = [];

class RainDrop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.length = Math.random() * 20 + 10;
    this.speed = Math.random() * 4 + 4;
  }

  fall() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = Math.random() * -100;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'lightblue';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.stroke();
  }
}

// Create raindrops
for (let i = 0; i < 200; i++) {
  drops.push(new RainDrop());
}

// Animate rain
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let drop of drops) {
    drop.fall();
    drop.draw();
  }
  requestAnimationFrame(animate);
}

animate();

// Lightning flash effect
function lightningStrike() {
  flash.style.opacity = '1';
  setTimeout(() => {
    flash.style.opacity = '0';
  }, 100);
}

// Random lightning strike
setInterval(() => {
  if (Math.random() > 0.8) lightningStrike();
}, 2000);