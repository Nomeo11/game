let phrase = "Curious Cadence";
let letters = [];
let ceramicPieces = [];
let glitchInterval = 10;

function setup() {
  createCanvas(800, 400);
  textSize(32);
  textAlign(CENTER, CENTER);

  // Initialize letters
  let spacing = 40;
  for (let i = 0; i < phrase.length; i++) {
    let x = width / 2 + (i - phrase.length / 2) * spacing;
    let y = height / 4;
    letters.push({ char: phrase[i], x: x, y: y, jitter: 0 });
  }

  // Initialize ceramic pieces
  for (let i = 0; i < 100; i++) { // Generate 100 pieces
    ceramicPieces.push({
      x: random(width),
      y: random(height / 2, height / 2 + 50),
      vx: random(-5, 5),
      vy: random(-2, 2),
      size: random(5, 20)
    });
  }
}

function draw() {
  background(255);

  // Draw and animate letters
  letters.forEach((letter, index) => {
    if (frameCount % glitchInterval === 0) { // Apply glitch
      letter.jitter = random(-5, 5);
    }
    // Move letters down for quicksand effect
    letter.y += 0.5;
    // Draw letters
    if (letter.y < height - 20) { // Stop sinking at a certain point
      text(letter.char, letter.x + letter.jitter, letter.y);
    }
  });

  // Draw and animate ceramic pieces
  ceramicPieces.forEach(piece => {
    fill(200); // Ceramic color
    noStroke();
    ellipse(piece.x, piece.y, piece.size); // Draw ceramic piece
    // Update position
    piece.x += piece.vx;
    piece.y += piece.vy;
    // Gravity
    piece.vy += 0.1;
    // Friction
    piece.vx *= 0.99;
    piece.vy *= 0.99;
  });
}

