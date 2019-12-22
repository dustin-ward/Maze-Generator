function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function() {
    let neighbors = [];

    let top = grid[index(x, y-1)];
    let right = grid[index(x+1, y)];
    let bottom = grid[index(x, y+1)];
    let left = grid[index(x-1, y)];

    if(top && !top.visited) {
      neighbors.push(top);
    }
    if(right && !right.visited) {
      neighbors.push(right);
    }
    if(bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if(left && !left.visited) {
      neighbors.push(left);
    }

    if(neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    }
    else {
      return undefined;
    }
  }

  this.highlight = function() {
    let i = this.x * w;
    let j = this.y * w;
    noStroke();
    fill(0, 255, 0, 255);
    rect(i, j, w, w);
  };

  this.show = function() {
    let i = this.x * w;
    let j = this.y * w;
    stroke(0);
    strokeWeight(2);
    if (this.walls[0]) {
      line(i, j, i + w, j);
    }
    if (this.walls[1]) {
      line(i + w, j, i + w, j + w);
    }
    if (this.walls[2]) {
      line(i + w, j + w, i, j + w);
    }
    if (this.walls[3]) {
      line(i, j + w, i, j);
    }

    if (this.visited) {
      noStroke();
      fill(255, 255, 255, 100);
      rect(i, j, w, w);
    }
  };

}
