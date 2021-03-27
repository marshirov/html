var myObject = document.getElementById("id_button")

function random(number) {
    return Math.floor(Math.random()*(number+1));
    }

function color(){
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log(rndCol)
    document.body.style.backgroundColor = rndCol;
}

myObject.addEventListener('click', color, false)


