var selectBtn4 = document.getElementById('circle4');
selectBtn4.addEventListener('click', onClickBtn4);

var selectBtn5 = document.getElementById('circle5');
selectBtn5.addEventListener('click', onClickBtn5);

function onClickBtn4(){
    document.getElementById('circle4').style.backgroundColor = 'hsl(217, 12%, 63%)';
}

function onClickBtn5(){
    document.getElementById('circle5').style.backgroundColor = 'hsl(25, 97%, 53%)';
}