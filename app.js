const container = document.querySelector('#container');

const total_cells = 361;
var num_terms = 0;
board = [];
// creates a 2D arr with all 0s;
for (let i = 0; i < 19; i++){
    board[i] = [];
    for (let j = 0; j < 19; j++){
        board[i][j] = 0;
    }
}

function GetStatusImg(img){
    if (img.src === "none.jpg"){
        return "none";
    }
    else if (img.src === "x.jpg"){
        return "x";
    }
    else{
        return "o";
    }
}


function handClick(e){
    
    if (num_terms % 2 == 0){
        // first change the display of this img
        this.src = "x.jpg";
        // update the board;
      
    }
    else{
        // first change the display of this img;
        this.src = "o.jpg";
        // update the board;
 
    }
    
    num_terms++;
    
}
//initialize the board;
// The board contains the nodes;
// In each node, there is the img object (none.jpg), and the position of the node;
for (let i = 0; i < 361; i++){
    const newImg = document.createElement('img');
    // init all the pics with none.jpg
    newImg.src = "none.jpg";
    // set the eventlistener for all clicks;
    newImg.addEventListener('click', handClick, {once:true});
    // set up the coordinates for all the imgs
    newImg.setAttribute("x", `${Math.floor(i/19)}`);
    newImg.setAttribute("y", `${i%19}`);
    // put all the imgs inside the board;
    board[Math.floor(i/19)][i%19] = newImg;
    container.appendChild(newImg);
}

