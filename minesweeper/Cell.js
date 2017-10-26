class Cell {

  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    if (random(1) < 0.2)
      this.mine = true;
    else {
      this.mine = false;
    }
    this.revealed = false;
  }

  show() {
    stroke(0);
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed) {
      if (this.mine) {
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
      }
    }
  }

  contains(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }

  reveal() {
    this.revealed = true;
  }
}
