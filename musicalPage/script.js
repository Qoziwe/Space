var audio = new Audio("../sound/ambient.mp3");
localStorage.setItem("ambientBool", true);
if (localStorage.getItem("ambientBool")) {
  audio.play();
}
