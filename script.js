function focusButton() {
    document.querySelector('.input-block').style.width = '295px';

    if (screen.width <= 360) {
        document.querySelector('.input-block').style.width = '260px';
    }

    document.getElementById("search-text").style.display = 'block';

    document.getElementById("search-block").style.width = '84px';
    document.getElementById("search-block").style.paddingRight = '-9px';
    
}

function blurButton() {
    document.querySelector('.input-block').style.width = '280px';

    

    document.getElementById("search-text").style.display = 'none';

    document.getElementById("search-block").style.width = '32px';
    document.getElementById("search-block").style.paddingRight = '0px';
}


function addBurgerMenu() {
    if (screen.width <= 768) {
        let bbButton = document.createElement('div');
        bbButton.className = 'burger-container';
        let bbButtonP = document.createElement('p');
        bbButtonP.className = 'burger-menu';
        bbButtonP.onclick = showSearch;
        let img = document.createElement('img');
        img.src = './img/Stroke 3.png';
        img.className = 'burger-icon';

        document.querySelector('.container').appendChild(bbButton);
        document.querySelector('.burger-container').appendChild(bbButtonP);
        document.querySelector('.burger-menu').appendChild(img);

        
    }
}

function showSearch(e) {
    if (e.target) {
        document.querySelector('.input-block').style.display = 'flex';
    } 
}

document.addEventListener('mouseup', function(e) {
    let input = document.querySelector('.input-block');
    if (!input.contains(e.target)) {
        input.style.display = 'none';
    }
});

function changePicture() {
    let img = document.querySelector('.picture-img');
    if (screen.width <= 360) {
        img.src = './img/banner 4.png';
    } else if (screen.width <= 768) {
        img.src = './img/banner 3.png';
    } else if (screen.width <= 1440) {
        img.src = './img/banner 2.png';
    } 
    
    
    
}

window.onload = changePicture();

window.onload = addBurgerMenu();