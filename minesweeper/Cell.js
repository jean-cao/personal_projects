class Cell {

  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0;

    if (random(1) < 0.2)
      this.mine = true;
    else {
      this.mine = false;
    }
    this.revealed = false;
  }

  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
      if (this.mine) {
        fill(127);
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
      }
      else {
        fill(200);
        rect(this.x, this.y, this.w, this.w);
        if (this.neighborCount > 0) {
          textAlign(CENTER);
          fill(0);
          text(this.neighborCount, this.x + this.w * 0.5, this.y - this.w * -0.6);
        }
      }
    }
  }

  countMines() {
    if (this.mine) {
        this.neighborCount = -1;
        return;
    }
    let total = 0;

    for (let xoff = -1; xoff <= 1; xoff++) {
      for (let yoff = -1; yoff <= 1; yoff++) {
        let i = this.i + xoff;
        let j = this.j + yoff;
        if (i > -1 && i < cols && j > -1 && j < rows)
        {
          let neighbor = grid[i][j];
            if (neighbor.mine)
          total++;
        }
      }
    }
    this.neighborCount = total;

  }

  contains(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }

  reveal() {
    this.revealed = true;
    if (this.neighborCount == 0)
    {
      this.floodFill();
    }
  }

  floodFill() {
    for (let xoff = -1; xoff <= 1; xoff++) {
      for (let yoff = -1; yoff <= 1; yoff++) {
        let i = this.i + xoff;
        let j = this.j + yoff;
        if (i > -1 && i < cols && j > -1 && j < rows)
        {
          let neighbor = grid[i][j];
            if (!neighbor.mine && !neighbor.revealed )
              neighbor.reveal();
        }
      }
    }
  }
}
