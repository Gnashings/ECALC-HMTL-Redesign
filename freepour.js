var move = document.getElementById('filler');
var position = parseInt(move.style.marginBottom + 0);

function shove() {
    console.log("START " + position);
    if (position >= 100)
    {
        position = 0;
        move.style.marginBottom = position + "%"
        return;
    }

    if (position == 0)
    {
        position += 10;
        console.log("first rung " + position);
    }
    else if (position == 10)
    {
        position += 10;
        console.log("second rung " + position);
    }
    else if (position == 20)
    {
        position += 13;
        console.log("third rung " + position);
    }
    else if (position == 33)
    {
        position += 17;
        console.log("fourth rung " + position);
    }
    else if (position == 50)
    {
        position += 15;
        console.log("fifth rung " + position);
    }
    else if (position == 65)
    {
        position += 10;
        console.log("sixth rung " + position);
    }
    else if (position == 75)
    {
        position += 10;
        console.log("seventh rung " + position);
    }
    else
        position = 0;


    console.log("END " + position);

    move.style.marginBottom = position + "%"
    /*
    if (move.style.marginBottom == "100%") {
        move.style.marginBottom = "0";
    } else {
        move.style.marginBottom = position + "%";
    }
    */
    
}

function wah() {
    var move = document.getElementById('animable');
    var position = window.getComputedStyle(move).getPropertyValue("background-position");
    document.getElementById("animable").style.backgroundPosition = "0% 0%";
    var skunt = move.style.backgroundPosition;
    console.log(position);
    console.log(move);


    if (move.style.background-position != "100%") {
        position += 25;
    }
    
}