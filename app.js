const container = document.querySelector('#container');
const dim = 19;
const total_cells = dim**2;
var num_terms = 0;
board = [];
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
restartButton.addEventListener("click", reload, false);
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
winningMessageElement.classList.remove('show')
// creates a 2D arr with all 0s;
for (let i = 0; i < dim; i++){
    board[i] = [];
    for (let j = 0; j < dim; j++){
        board[i][j] = 0;
    }
}
function reload() {
    reload = location.reload();
}
function GetStatusImg(img){
    if (img.getAttribute('src') === "none.jpg"){
        return "none";
    }
    else if (img.getAttribute('src') === "x.jpg"){
        return "x";
    }
    else{
        return "o";
    }
}


function CheckWin(img){
    let piece = GetStatusImg(img);
    let current_x = img.getAttribute("x");
    let current_y = img.getAttribute("y");

    // check horizontal and vertical;
    let count = 0;
    for (let i = 0; i < 19; i++){
        if (GetStatusImg(board[current_x][i]) === piece){
            count += 1;
        }
        else{
            count = 0;
        }
        if (count === 5){
            return "horizontal";
        }
    }
    count = 0;
    for (let i = 0; i < 19; i++){
        if (GetStatusImg(board[i][current_y]) === piece){
            count += 1;
        }
        else{
            count = 0;
        }
        if (count === 5){
            return "vertical";
        }
    }

    count = 0;
    let to_left = img.getAttribute("x");
    let to_top = img.getAttribute("y");
    let to_right = 18 - img.getAttribute("x");
    let to_bottom = 18 - img.getAttribute("y");

    let left_top = Math.min(to_left, to_top);
    let right_bottom = Math.min(to_right, to_bottom);

    let start_pos_x = img.getAttribute("x") - left_top;
    let start_pos_y = img.getAttribute("y") - left_top;
    let end_pos_x = parseInt(img.getAttribute("x")) + right_bottom;
    let end_pos_y = parseInt(img.getAttribute("y")) + right_bottom;

    let jumps = end_pos_x - start_pos_x;

    for (let i = 0; i < jumps + 1; i++){
        if (GetStatusImg(board[start_pos_x+i][start_pos_y+i]) === piece){
            count += 1;
        }
        else{
            count = 0;
        }
        if (count === 5){
            return "diagonal";
        }
    }
    


}

function handClick(e){
    
    if (num_terms % 2 == 0){
        // first change the display of this img
        this.src = "x.jpg";
        document.getElementById("top_title").innerText = "O's Turn";
        // update the board;
      
    }
    else{
        // first change the display of this img;
        this.src = "o.jpg";
        document.getElementById("top_title").innerText = "X's Turn";
        // update the board;
 
    }
    
    if (CheckWin(this)){
        document.getElementById("top_title").innerText = "Game Over!";
        console.log(GetStatusImg(this));
        winningMessageTextElement.innerText = `${GetStatusImg(this)} wins!`
        winningMessageElement.classList.add('show')
        
    
    }

    num_terms++;
    
}
//initialize the board;
// The board contains the nodes;
// In each node, there is the img object (none.jpg), and the position of the node;
for (let i = 0; i < total_cells; i++){
    const newImg = document.createElement('img');
    // init all the pics with none.jpg
    newImg.src = "none.jpg";
    // set the eventlistener for all clicks;
    newImg.addEventListener('click', handClick, {once:true});
    // set up the coordinates for all the imgs
    newImg.setAttribute("x", `${Math.floor(i/dim)}`);
    newImg.setAttribute("y", `${i%dim}`);
    // put all the imgs inside the board;
    board[Math.floor(i/dim)][i%dim] = newImg;
    container.appendChild(newImg);
}

