// Get the body element
const body = document.body;

// Create a demo "sprite" element
const sprite = document.createElement('div');
sprite.style.width = '50px';
sprite.style.height = '50px';
sprite.style.backgroundColor = '#ff6600';
sprite.style.position = 'absolute';
sprite.style.top = '200px';
sprite.style.left = '0px';
body.appendChild(sprite);

// Animation variables
let posX = 0;
let direction = 1;

// Animate sprite
function animateSprite() {
    posX += 2 * direction;
    sprite.style.left = posX + 'px';

    // Bounce back at screen edges
    if (posX > window.innerWidth - 50 || posX < 0) {
        direction *= -1;
    }

    requestAnimationFrame(animateSprite);
}

// Start animation
animateSprite();