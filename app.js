const container = document.querySelector('#container');
const total_cells = 9;
var num_terms = 0;
board = [];

for (let i = 0; i < 3; i++){
    board[i] = [];
    for (let j = 0; j < 3; j++){
        board[i][j] = 0;
    }
}

for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        console.log(board[i][j]);
    }
}
function node(obj, pos_x, pos_y){
    this.obj = obj;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
 
}
function handClick(e){
  
    if (num_terms % 2 == 0){
        this.src = "x.jpg";

    }
    else{
        this.src = "o.jpg";
    }
    num_terms++;
    
}
for (let i = 0; i < 9; i++){
    const newImg = document.createElement('img');
    newImg.src = "none.jpg";
    newImg.id = `grid ${i}`;
    newImg.addEventListener('click', handClick, {once:true});
    
    board[Math.floor(i/3)][i%3] = new node(newImg, Math.floor(i/3) + 1, i%3 + 1);
    container.appendChild(newImg);
}

