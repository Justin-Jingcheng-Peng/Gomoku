const container = document.querySelector('#container');

for (let i = 0; i < 9; i++){
    const newImg = document.createElement('img');
    newImg.src = "x.jpg";
    newImg.id = 'grid';
    container.appendChild(newImg);
}

