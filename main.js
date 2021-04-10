var minutes = 25;
var seconds = "00";

var click = new Audio('start.mp3');
var bell = new Audio('end.mp3');
var reset = new Audio('reset.mp3');

function padrao() {
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

function start() {
    click.play()
    minutes = 24;
    seconds = 59;

    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;


    var minutes_interval = setInterval(minutesTimer, 62000);
    var seconds_interval = setInterval(secondsTimer, 1000);


    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('min').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('sec').innerHTML = seconds;

        if (seconds <= 0) {
            if (minutes <= 0) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                bell.play()
                alert('rest for about 5 minutes  (Descanse um pouco por 5 minutos) ')
            }
            seconds = 60;
        }
    }
}


function delayUrlLoad(url, mils) {
    url = 'index.html'
    mils = 1200;
    reset.play()
    setTimeout(function() {
        window.location.href = url;
    }, mils)
}







// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something! (Escreva Algo!!!!!)");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}