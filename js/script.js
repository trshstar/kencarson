var sound = document.getElementById("auto");


function playSound(){
    sound.volume = .025;
    sound.play();
}

function press(){
    var x = document.getElementById("myVideo1");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonHide").innerHTML = "hide";
      document.getElementById("buttonHide").style.opacity = "0.8";
    } else {
      x.style.display = "none";
      document.getElementById("buttonHide").innerHTML = "show";
      document.getElementById("buttonHide").style.opacity = "0.0";
    }
}
