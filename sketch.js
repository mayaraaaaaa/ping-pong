let xBolinha = 100
let yBolinha = 50
let diametro = 20

let velocidadexBolinha = 6
let velocidadeyBolinha = 6

function setup() {
  createCanvas(600, 400);
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
    
    if (xBolinha > width || xBolinha < 0) {
        velocidadexBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeyBolinha *= -1;
    }
}



