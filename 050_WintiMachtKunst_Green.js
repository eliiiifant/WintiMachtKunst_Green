/*
adapted from p5js Showcase sketch 36 Days of Type
by Richard Bourne
*/

let font, tiles, tileSize
let loopDuration = 1 * 120
let oldPointX, oldPointY

function preload() {
  font = loadFont('https://fontlibrary.org/assets/fonts/bebasneueregular/ffd41e909f9902e9650248cd509d56a3/463e6edea05816ef8a5ba91397a96b8c/BebasNeueRegular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  
  points = font.textToPoints('W', 500, 600, 300, {
    sampleFactor: .2,
    simplifyThreshold: 0
  })
  
  pointszwei = font.textToPoints('',200, 720, 300, {
    sampleFactor: 0.01,
    simplifyThreshold: .1
  })


  tiles = 2
  tileSize = 2
}

function draw() {
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map((t), 0, 1, 0, PI)
  
  background(0)

 points.forEach(point => {
    push()
    translate(point.x, point.y)
    rotate(u)
    fill('#0048ff')
    ellipse(10 * sin(u), -2 * sin(u), 20 + 200 * sin(u), 20)
    fill('#8000ff')
    ellipse(10 * sin(u), -2 * sin(u), 20 + 190 * sin(u), 20)
    fill('#ffffff')
    ellipse(10 * sin(u), 0 * sin(u), 20 + 240 * sin(u), 20)
    fill('#8000ff')
    ellipse(10 * sin(u), 8 * sin(u), 40 + 200 * sin(u), 20)
    fill('#00ff84')
    ellipse(10 * sin(u), 8 * sin(u), 40 + 190 * sin(u), 20)
    pop()
  })
  
   pointszwei.forEach(point => {
    push()
    translate(point.x, point.y)
    rotate(u)
    fill('#0048ff')
    ellipse(2 * sin(u), -2 * sin(u), 40 + 200 * sin(u), 20)
    fill('#8000ff')
    ellipse(2 * sin(u), -2 * sin(u), 40 + 190 * sin(u), 20)
    fill('#ffffff')
    ellipse(0 * sin(u), 0 * sin(u), 30 + 240 * sin(u), 20)
    fill('#8000ff')
    ellipse(8 * sin(u), 8 * sin(u), 30 + 200 * sin(u), 20)
    fill('#00ff84')
    ellipse(8 * sin(u), 6 * sin(u), 30 + 190 * sin(u), 20)
    pop()
  })
}
