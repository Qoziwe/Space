// var audio = new Audio("../sounds/planets_transition.mp3");

window.onload = function () {
  //   audio.play();
  document.getElementById("registration_panel").style.transform =
    "translateX(0vw)";
  setTimeout(function () {
    document.getElementById("regH").style.transform = "translateX(0vw)";
    setTimeout(function () {
      document.getElementById("regInp1").style.transform = "translateX(0vw)";
      setTimeout(function () {
        document.getElementById("regInp2").style.transform = "translateX(0vw)";
        setTimeout(function () {
          document.getElementById("regInp3").style.transform =
            "translateX(0vw)";
          setTimeout(function () {
            document.getElementById("registration_buttons").style.transform =
              "translateX(0vw)";
            setTimeout(function () {
              document.getElementById("registration_3dmodel").style.transform =
                "translateX(0vw)";
            }, 200);
          }, 200);
        }, 100);
      }, 100);
    }, 100);
  }, 300);
};

function nowSection(section) {
  localStorage.setItem("NowSection", section);
  document.getElementById("nowSection").innerHTML =
    localStorage.getItem("NowSection");
  //   alert(section);
}
