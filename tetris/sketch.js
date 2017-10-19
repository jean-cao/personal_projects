var l = 0;
var r = 4;
var count = 0;
var rate = 1;

var grid = new Array(10);
for (var i = 0; i < 10; i++) {
    grid[i] = new Array(20);
}

var hard_grid = new Array(10);
for (var i = 0; i < 10; i++) {
    hard_grid[i] = new Array(20);
}

function create_hard_grid() {
var i = 0;
var k = 0;
var j = 0;
    while (i < 10)
    {
      k = 0;
       while (k < 20)
       {
           hard_grid[i][k] = 0;
          k++;
       }
        i++;
    }
}

function barre() {
  grid[r][l-1] = 1;
  grid[r][l] = 1;
  grid[r][l+1] = 1;
  grid[r][l+2] = 1;
}

function create_grid() {
var i = 0;
var k = 0;
var j = 0;
    while (i < 10)
    {
      k = 0;
       while (k < 20)
       {
           grid[i][k] = 0;
          k++;
       }
        i++;
    }
}

function display_grid() {
var i = 0;
var k = 0;
var xbloc = 0;
var ybloc = 0;
    while (i < 10)
    {
        k = 0;
        while (k < 20)
        {
            if (grid[i][k] == 1)
                fill(255);
            else
                fill(0);
            xbloc = 345 + (25 * i);
            ybloc = 100 + (25 * k);
            rect(xbloc, ybloc, 25, 25);
            k++;
        }
        i++;
    }
}

function refresh_hard_grid() {
var line = 0;
var row = 20;
      while (row > 0)
      {
          while(line < 10)
          {
            if (hard_grid[line][row] == 1)
            {
              hard_grid[line][row] = 0;
              hard_grid[line][row + 1] = 1;
            }
            line++;
          }
        line = 0;
        row--;
      }
}

function delete_line() {
var line = 0;
var row = 20;
    while (row > 0)
    {
      if (empty_line(row) == 1)
      {
        while(line < 10)
        {
          hard_grid[line][row] = 0;
          line++;
        }
        line = 0;
        refresh_hard_grid();
      }
      row--;
    }
}

function display_hard_grid() {
var i = 0;
var k = 0;
var xbloc = 0;
var ybloc = 0;
  delete_line();
  while (i < 10)
  {
      k = 0;
      while (k < 20)
      {
          if (hard_grid[i][k] == 1 || grid[i][k] == 1)
              fill(255);
          else
              fill(0);
          xbloc = 345 + (25 * i);
          ybloc = 100 + (25 * k);
          rect(xbloc, ybloc, 25, 25);
          k++;
      }
      i++;
  }
}

function empty_line(row) {
  var i = 0;
  while (i < 10)
  {
    if (hard_grid[i][row] != 1)
    {
      return (-1);
    }
    i++;
  }
  return (1);
}

function down_piece() {
  if (l + 3 < 20 && count == 0 && hard_grid[r][l+3] == 0)
  {
    grid[r][l] = 1;
    grid[r][l+1] = 1;
    grid[r][l+2] = 1;
    grid[r][l+3] = 1;
    l++;
  }
  else if (l + 3 < 20 && count == 1)
  {
    barre();
  }
  else {
    hard_grid[r][l-1] = 1;
    hard_grid[r][l] = 1;
    hard_grid[r][l+1] = 1;
    hard_grid[r][l+2] = 1;
    l = 0;
    r = 4;
  }
}

function setup() {
  createCanvas(1024, 720);
  create_grid();
  display_grid();
  create_hard_grid();
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  rect(340, 100, 5, 500);
  rect(595, 100, 5, 500);
  rect(340, 600, 260, 5);
  if (keyIsDown(DOWN_ARROW))
    rate = 30;
  else
    rate = 1;
  frameRate(rate);
  create_grid();
  down_piece();
  display_grid();
  display_hard_grid();
  count = 0;
  //  grid[0][1] = 1;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW)
  {
    if (r > 0 && hard_grid[r-1][l+2] == 0)
      r--;
    count = 1;
    redraw();
  }
  else if (keyCode === RIGHT_ARROW)
  {
    if (r < 9 && hard_grid[r+ 1][l+2] == 0)
      r++;
    count = 1;
    redraw();
  }
}
