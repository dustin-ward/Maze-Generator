let cols, rows;
let w = 50;
let current;
let grid = [];
let stack = [];

function setup() {
  createCanvas(800, 800);
  cols = floor(width / w);
  rows = floor(height / w);

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      var cell = new Cell(j, i);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(60);
  for(let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  let next = current.checkNeighbors();
  if(next) {
    next.visited = true;
    stack.push(current);
    removeWalls(current, next);
    current = next;
  }
  else if(stack.length > 0) {
    current = stack.pop();
  }

}

function index(i, j) {
  if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.x - b.x;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.y - b.y;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
