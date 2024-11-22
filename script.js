var sun = document.getElementById("sun");
var pl1 = document.getElementById("1");
var mercury = document.getElementById("mercury");
var pl2 = document.getElementById("2");
var venus = document.getElementById("venus");
var pl3 = document.getElementById("3");
var earth = document.getElementById("earth");
var pl4 = document.getElementById("4");
var mars = document.getElementById("mars");
var pl5 = document.getElementById("5");
var jupiter = document.getElementById("jupiter");
var pl6 = document.getElementById("6");
var saturn = document.getElementById("saturn");
var pl7 = document.getElementById("7");
var uranus = document.getElementById("uranus");
var pl8 = document.getElementById("8");
var neptune = document.getElementById("neptune");
var pl9 = document.getElementById("9");

var planetpanel = document.getElementById("planetpanel");
var planetpanel_close_button = document.getElementById(
  "planetpanel_close_button"
);
planetpanel_close_button.onclick = function () {
  planetpanel.style = "105vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl1.onclick = function () {
  sun.style.left = "60vw";
  planetpanel.style.left = "50vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};
pl2.onclick = function () {
  mercury.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};
pl3.onclick = function () {
  venus.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};
pl4.onclick = function () {
  earth.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl5.onclick = function () {
  mars.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl6.onclick = function () {
  jupiter.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl7.onclick = function () {
  saturn.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  uranus.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl8.onclick = function () {
  uranus.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  neptune.style.left = "110vw";
};

pl9.onclick = function () {
  neptune.style.left = "60vw";
  planetpanel.style.left = "50vw";
  sun.style.left = "110vw";
  mercury.style.left = "110vw";
  venus.style.left = "110vw";
  earth.style.left = "110vw";
  mars.style.left = "110vw";
  jupiter.style.left = "110vw";
  saturn.style.left = "110vw";
  uranus.style.left = "110vw";
};

function nowSection(section) {
  localStorage.setItem("NowSection", section);
  document.getElementById("nowSection").innerHTML =
    localStorage.getItem("NowSection");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nowSection").innerHTML =
    localStorage.getItem("NowSection");
});

document.addEventListener("wheel", function (event) {
  console.log(event.deltaY);
  if (event.deltaY < 0) {
    allTransitionSound();
    switch (localStorage.getItem("NowSection")) {
      case "Planets":
        nowSection("Home");
        break;
      case "Missions":
        nowSection("Planets");
        break;
      case "Future":
        nowSection("Missions");
        break;
    }
  } else {
    allTransitionSound();
    switch (localStorage.getItem("NowSection")) {
      case "Home":
        nowSection("Planets");
        break;
      case "Planets":
        nowSection("Missions");
        break;
      case "Missions":
        nowSection("Future");
        break;
    }
  }
  switch (localStorage.getItem("NowSection")) {
    case "Home":
      var top = document.getElementById("welcome_page").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Planets":
      var top = document.getElementById("planets").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Missions":
      var top = document.getElementById("missions").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Future":
      var top = document.getElementById("future").offsetTop;
      window.scrollTo(0, top);
      break;
  }
});

window.addEventListener("resize", () => {
  window.scrollTo(0, top);
  switch (localStorage.getItem("NowSection")) {
    case "Home":
      var top = document.getElementById("welcome_page").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Planets":
      var top = document.getElementById("planets").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Missions":
      var top = document.getElementById("missions").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Future":
      var top = document.getElementById("future").offsetTop;
      window.scrollTo(0, top);
      break;
  }
});
window.onload = function () {
  // window.scrollTo(0, top);
  switch (localStorage.getItem("NowSection")) {
    case "Home":
      var top = document.getElementById("welcome_page").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Planets":
      var top = document.getElementById("planets").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Missions":
      var top = document.getElementById("missions").offsetTop;
      window.scrollTo(0, top);
      break;
    case "Future":
      var top = document.getElementById("future").offsetTop;
      window.scrollTo(0, top);
      break;
  }
};

var ambient = new Audio("./sounds/ambient.mp3");
if (confirm("Do you want to continue with musical accompaniment?")) {
  ambient.play();
}

var allTransition = new Audio("./sounds/all-transition.mp3");
function allTransitionSound() {
  allTransition.currentTime = 0;
  allTransition.play();
}

document.getElementById("readme_button").onclick = function () {
  var siteOpenSound = new Audio("./sounds/siteOpenSound.mp3");
  siteOpenSound.play();
  var counter = 1;
  var readmeclearer = setInterval(() => {
    counter -= 0.01;
    document.getElementById("readme").style.opacity = counter.toString();
    // console.log(counter);
    if (counter < 0) {
      clearInterval(readmeclearer);
      document.getElementById("readme").style.display = "none";
    }
  }, 10);
};

var planets_planet_arrowLeft = document.getElementById(
  "planets_planet_arrowLeft"
);
var planets_planet_arrowRight = document.getElementById(
  "planets_planet_arrowRight"
);

var planetsTransition = new Audio("./sounds/planets-transition.mp3");
function regPageTransit() {
  window.open("./registrationPage/registrationPage.html");
  // localStorage.setItem("NowSection", "Registration");
}

localStorage.setItem("planetNumber", 1);

planets_planet_arrowLeft.onclick = function () {
  var planetNumber = localStorage.getItem("planetNumber");
  if (planetNumber == 2) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 1);
    document.getElementById("planets_planet_venus").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML =
        "Mercury";
      document.getElementById("planets_planet_planetNumber").innerHTML = "1";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(107,107,107,1) 0%, rgba(87,87,87,1) 11%, rgba(51,51,51,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(51,51,51,1) 90%, rgba(87,87,87,1) 95%, rgba(107,107,107,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Mercury is the smallest and innermost planet in our solar system. It's a rocky planet, much like Earth, but it's also the fastest, zipping around the sun in just 88 Earth days. Mercury is named after the Roman messenger god, who was known for his speed. <br><br> It's a scorching hot world, with temperatures reaching over 800 degrees Fahrenheit during the day, but plummeting to hundreds of degrees below zero at night. It's a fascinating place, with a cratered surface, a thin atmosphere, and a magnetic field that's only about 1% as strong as Earth's.";
      document.getElementById("planets_planet_article").innerHTML =
        "THE CLOSEST PLANET TO THE SUN";
      document.getElementById("planets_planet_venus").src =
        "./3dModels/mercury.glb";
      document.getElementById("planets_planet_venus").id =
        "planets_planet_mercury";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_mercury").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 3) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 2);
    document.getElementById("planets_planet_earth").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Venus";
      document.getElementById("planets_planet_planetNumber").innerHTML = "2";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(208,141,0,1) 0%, rgba(99,67,0,1) 11%, rgba(51,34,0,1) 19%, rgba(0,0,0,1) 29%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 83%, rgba(51,34,0,1) 90%, rgba(99,67,0,1) 95%, rgba(208,141,0,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Venus, the second planet from the Sun, is often called Earth's twin due to its similar size and mass. However, beneath its cloud-covered surface lies a scorching hot world. Venus has the densest atmosphere of all the terrestrial planets, composed primarily of carbon dioxide. <br><br> This thick atmosphere traps heat, creating a runaway greenhouse effect that makes Venus the hottest planet in our solar system, with surface temperatures reaching over 900 degrees Fahrenheit. Despite its fiery nature, Venus is named after the Roman goddess of love and beauty.";
      document.getElementById("planets_planet_article").innerHTML =
        "VENUS - HOT AND POISONOUS";
      document.getElementById("planets_planet_earth").src =
        "./3dModels/venus.glb";
      document.getElementById("planets_planet_earth").id =
        "planets_planet_venus";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_venus").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 4) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 3);
    document.getElementById("planets_planet_mars").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Earth";
      document.getElementById("planets_planet_planetNumber").innerHTML = "3";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(0, 106, 156, 1) 0%, rgba(1, 55, 80, 1) 11%, rgba(1, 26, 37, 1) 19%, rgba(1, 1, 1, 1) 29%, rgba(0, 0, 0, 1) 50%, rgba(1, 1, 1, 1) 83%, rgba(1, 42, 61, 1) 90%, rgba(1, 82, 119, 1) 95%, rgba(0, 174, 255, 1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Earth is the third planet from the Sun and the only place known to support life. Although it’s the fifth largest planet in the solar system, Earth is unique for having liquid water on its surface. It is just slightly bigger than Venus, but the largest of the four rocky planets closest to the Sun. <br /><br /> The name 'Earth' is at least 1,000 years old. Unlike other planets, which were named after Greek and Roman gods, Earth’s name comes from an old Germanic word meaning “the ground.”";
      document.getElementById("planets_planet_article").innerHTML =
        "THE BLUE-GREEN PLANET";
      document.getElementById("planets_planet_mars").src =
        "./3dModels/earth.glb";
      document.getElementById("planets_planet_mars").id =
        "planets_planet_earth";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_earth").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 5) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 4);
    document.getElementById("planets_planet_jupiter").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Mars";
      document.getElementById("planets_planet_planetNumber").innerHTML = "4";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(156,69,0,1) 0%, rgba(80,40,8,1) 11%, rgba(18,8,1,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(18,8,1,1) 90%, rgba(80,40,8,1) 95%, rgba(156,69,0,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Mars, the fourth planet from the Sun, is a cold, dusty world with a thin atmosphere. It's known as the 'Red Planet' because of its rusty-red surface, caused by iron oxide. <br><br>  While Mars is a desert today, evidence suggests it once had liquid water, and scientists are searching for signs of past life. Future missions aim to explore its potential for future human settlements.  ";
      document.getElementById("planets_planet_article").innerHTML =
        "THE RED PLANET";
      document.getElementById("planets_planet_jupiter").src =
        "./3dModels/mars.glb";
      document.getElementById("planets_planet_jupiter").id =
        "planets_planet_mars";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_mars").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 6) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 5);
    document.getElementById("planets_planet_saturn").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML =
        "Jupiter";
      document.getElementById("planets_planet_planetNumber").innerHTML = "5";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(173,99,16,1) 0%, rgba(129,81,28,1) 11%, rgba(74,43,9,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(74,43,9,1) 90%, rgba(129,81,28,1) 95%, rgba(173,99,16,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Jupiter, the fifth planet from the Sun, is a true giant. It's the largest planet in our solar system, boasting a mass more than 2.5 times that of all the other planets combined. This gas giant is a swirling vortex of hydrogen and helium, with no solid surface.<br><br> Jupiter is famous for its iconic Great Red Spot, a massive storm larger than Earth that has raged for centuries. This swirling storm is just one of many features that make Jupiter a fascinating object of study. It has a faint ring system, a powerful magnetic field, and numerous moons, including the four largest, known as the Galilean moons.";
      document.getElementById("planets_planet_article").innerHTML =
        "THE BIGGEST PLANET OF THE SOLAR SYSTEM";
      document.getElementById("planets_planet_saturn").src =
        "./3dModels/jupiter.glb";
      document.getElementById("planets_planet_saturn").id =
        "planets_planet_jupiter";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_jupiter").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 7) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 6);
    document.getElementById("planets_planet_uranus").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML =
        "Jupiter";
      document.getElementById("planets_planet_planetNumber").innerHTML = "6";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(219,181,124,1) 0%, rgba(164,141,106,1) 11%, rgba(108,94,71,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(108,94,71,1) 90%, rgba(164,141,106,1) 95%, rgba(219,181,124,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Saturn, the sixth planet from the Sun, is a gas giant renowned for its spectacular ring system. This magnificent structure, composed of ice and rock particles, is a breathtaking sight, making Saturn one of the most visually captivating objects in our solar system. <br><br> The planet's atmosphere, primarily hydrogen and helium, is marked by swirling clouds of ammonia and methane, giving it a distinctive yellow-brown hue. Beneath this vibrant facade lies a turbulent world, with powerful winds and intense storms. ";
      document.getElementById("planets_planet_article").innerHTML =
        "THE LORD OF THE RINGS";
      document.getElementById("planets_planet_uranus").src =
        "./3dModels/saturn.glb";
      document.getElementById("planets_planet_uranus").id =
        "planets_planet_saturn";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_saturn").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 8) {
    planetsTransition.currentTime = 7;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 7);
    document.getElementById("planets_planet_neptune").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Uranus";
      document.getElementById("planets_planet_planetNumber").innerHTML = "7";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(0,234,255,1) 0%, rgba(0,199,217,1) 11%, rgba(0,145,158,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(0,145,158,1) 90%, rgba(0,199,217,1) 95%, rgba(0,234,255,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Uranus, the seventh planet from the Sun, is a giant ice giant. It's unique because it rotates on its side, with its axis tilted at a whopping 98 degrees! This unusual tilt might be the result of a collision with a massive object in the early solar system. <br><br> Uranus has a faint ring system and numerous moons, some of which have active volcanoes. Its atmosphere is composed mainly of hydrogen and helium, with traces of methane, which gives it its distinctive blue-green color.";
      document.getElementById("planets_planet_article").innerHTML =
        "ICY AND BLUE";
      document.getElementById("planets_planet_neptune").src =
        "./3dModels/uranus.glb";
      document.getElementById("planets_planet_neptune").id =
        "planets_planet_uranus";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_uranus").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
};

planets_planet_arrowRight.onclick = function () {
  var planetNumber = localStorage.getItem("planetNumber");
  if (planetNumber == 1) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 2);
    document.getElementById("planets_planet_mercury").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Venus";
      document.getElementById("planets_planet_planetNumber").innerHTML = "2";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(208,141,0,1) 0%, rgba(99,67,0,1) 11%, rgba(51,34,0,1) 19%, rgba(0,0,0,1) 29%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 83%, rgba(51,34,0,1) 90%, rgba(99,67,0,1) 95%, rgba(208,141,0,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Venus, the second planet from the Sun, is often called Earth's twin due to its similar size and mass. However, beneath its cloud-covered surface lies a scorching hot world. Venus has the densest atmosphere of all the terrestrial planets, composed primarily of carbon dioxide. <br><br> This thick atmosphere traps heat, creating a runaway greenhouse effect that makes Venus the hottest planet in our solar system, with surface temperatures reaching over 900 degrees Fahrenheit. Despite its fiery nature, Venus is named after the Roman goddess of love and beauty.";
      document.getElementById("planets_planet_article").innerHTML =
        "VENUS - HOT AND POISONOUS";
      document.getElementById("planets_planet_mercury").src =
        "./3dModels/venus.glb";
      document.getElementById("planets_planet_mercury").id =
        "planets_planet_venus";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_venus").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 2) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 3);
    document.getElementById("planets_planet_venus").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Earth";
      document.getElementById("planets_planet_planetNumber").innerHTML = "3";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(0, 106, 156, 1) 0%, rgba(1, 55, 80, 1) 11%, rgba(1, 26, 37, 1) 19%, rgba(1, 1, 1, 1) 29%, rgba(0, 0, 0, 1) 50%, rgba(1, 1, 1, 1) 83%, rgba(1, 42, 61, 1) 90%, rgba(1, 82, 119, 1) 95%, rgba(0, 174, 255, 1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Earth is the third planet from the Sun and the only place known to support life. Although it’s the fifth largest planet in the solar system, Earth is unique for having liquid water on its surface. It is just slightly bigger than Venus, but the largest of the four rocky planets closest to the Sun. <br /><br /> The name 'Earth' is at least 1,000 years old. Unlike other planets, which were named after Greek and Roman gods, Earth’s name comes from an old Germanic word meaning “the ground.”";
      document.getElementById("planets_planet_article").innerHTML =
        "THE BLUE-GREEN PLANET";
      document.getElementById("planets_planet_venus").src =
        "./3dModels/earth.glb";
      document.getElementById("planets_planet_venus").id =
        "planets_planet_earth";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_earth").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 3) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 4);
    document.getElementById("planets_planet_earth").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Mars";
      document.getElementById("planets_planet_planetNumber").innerHTML = "4";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(156,69,0,1) 0%, rgba(80,40,8,1) 11%, rgba(18,8,1,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(18,8,1,1) 90%, rgba(80,40,8,1) 95%, rgba(156,69,0,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Mars, the fourth planet from the Sun, is a cold, dusty world with a thin atmosphere. It's known as the 'Red Planet' because of its rusty-red surface, caused by iron oxide. <br><br>  While Mars is a desert today, evidence suggests it once had liquid water, and scientists are searching for signs of past life. Future missions aim to explore its potential for future human settlements.  ";
      document.getElementById("planets_planet_article").innerHTML =
        "THE RED PLANET";
      document.getElementById("planets_planet_earth").src =
        "./3dModels/mars.glb";
      document.getElementById("planets_planet_earth").id =
        "planets_planet_mars";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_mars").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 4) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 5);
    document.getElementById("planets_planet_mars").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML =
        "Jupiter";
      document.getElementById("planets_planet_planetNumber").innerHTML = "5";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(173,99,16,1) 0%, rgba(129,81,28,1) 11%, rgba(74,43,9,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(74,43,9,1) 90%, rgba(129,81,28,1) 95%, rgba(173,99,16,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Jupiter, the fifth planet from the Sun, is a true giant. It's the largest planet in our solar system, boasting a mass more than 2.5 times that of all the other planets combined. This gas giant is a swirling vortex of hydrogen and helium, with no solid surface.<br><br> Jupiter is famous for its iconic Great Red Spot, a massive storm larger than Earth that has raged for centuries. This swirling storm is just one of many features that make Jupiter a fascinating object of study. It has a faint ring system, a powerful magnetic field, and numerous moons, including the four largest, known as the Galilean moons.";
      document.getElementById("planets_planet_article").innerHTML =
        "THE BIGGEST PLANET OF THE SOLAR SYSTEM";
      document.getElementById("planets_planet_mars").src =
        "./3dModels/jupiter.glb";
      document.getElementById("planets_planet_mars").id =
        "planets_planet_jupiter";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_jupiter").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 5) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 6);
    document.getElementById("planets_planet_jupiter").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Saturn";
      document.getElementById("planets_planet_planetNumber").innerHTML = "6";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(219,181,124,1) 0%, rgba(164,141,106,1) 11%, rgba(108,94,71,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(108,94,71,1) 90%, rgba(164,141,106,1) 95%, rgba(219,181,124,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Saturn, the sixth planet from the Sun, is a gas giant renowned for its spectacular ring system. This magnificent structure, composed of ice and rock particles, is a breathtaking sight, making Saturn one of the most visually captivating objects in our solar system. <br><br> The planet's atmosphere, primarily hydrogen and helium, is marked by swirling clouds of ammonia and methane, giving it a distinctive yellow-brown hue. Beneath this vibrant facade lies a turbulent world, with powerful winds and intense storms.";
      document.getElementById("planets_planet_article").innerHTML =
        "THE LORD OF THE RINGS";
      document.getElementById("planets_planet_jupiter").src =
        "./3dModels/saturn.glb";
      document.getElementById("planets_planet_jupiter").id =
        "planets_planet_saturn";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_saturn").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 6) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 7);
    document.getElementById("planets_planet_saturn").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML = "Uranus";
      document.getElementById("planets_planet_planetNumber").innerHTML = "7";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(0,234,255,1) 0%, rgba(0,199,217,1) 11%, rgba(0,145,158,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(0,145,158,1) 90%, rgba(0,199,217,1) 95%, rgba(0,234,255,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Uranus, the seventh planet from the Sun, is a giant ice giant. It's unique because it rotates on its side, with its axis tilted at a whopping 98 degrees! This unusual tilt might be the result of a collision with a massive object in the early solar system. <br><br> Uranus has a faint ring system and numerous moons, some of which have active volcanoes. Its atmosphere is composed mainly of hydrogen and helium, with traces of methane, which gives it its distinctive blue-green color.";
      document.getElementById("planets_planet_article").innerHTML =
        "ICY AND BLUE";
      document.getElementById("planets_planet_saturn").src =
        "./3dModels/uranus.glb";
      document.getElementById("planets_planet_saturn").id =
        "planets_planet_uranus";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_uranus").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
  if (planetNumber == 7) {
    planetsTransition.currentTime = 0;
    planetsTransition.play();
    localStorage.setItem("planetNumber", 8);
    document.getElementById("planets_planet_uranus").style.transform =
      "translateX(-200vw)";
    document.getElementById("planets_planet_planetNumber").style.transform =
      "translateY(100vw)";
    document.getElementById("planets_planet_mainTextP").style.transform =
      "translateX(100vw)";
    document.getElementById("planets_planet_planetName").style.transform =
      "translateY(100vw)";
    setTimeout(function () {
      document.getElementById("planets_planet_article").style.transform =
        "translateX(100vw)";
    }, 100);
    setTimeout(function () {
      document.getElementById("planets_planet_planetNumber").style.transform =
        "translateY(-100vw)";
      document.getElementById("planets_planet_planetName").innerHTML =
        "Neptune";
      document.getElementById("planets_planet_planetNumber").innerHTML = "8";
      document.getElementById("planets_planet").style.background =
        "linear-gradient(45deg, rgba(27,0,255,1) 0%, rgba(20,0,185,1) 11%, rgba(11,0,108,1) 19%, rgba(1,1,1,1) 29%, rgba(0,0,0,1) 50%, rgba(1,1,1,1) 83%, rgba(11,0,108,1) 90%, rgba(20,0,185,1) 95%, rgba(27,0,255,1) 100%)";
      document.getElementById("planets_planet_mainTextP").innerHTML =
        "Neptune is the eighth and farthest planet from the Sun in our Solar System. It is an ice giant, known for its strong winds and violent storms. Its atmosphere, composed mainly of hydrogen, helium, and methane, gives it a distinctive blue color. <br><br> Neptune has 14 known moons, the largest of which is Triton. Triton is unusual in that it orbits in the opposite direction to Neptune's rotation.";
      document.getElementById("planets_planet_article").innerHTML =
        "THE FARTHEST";
      document.getElementById("planets_planet_uranus").src =
        "./3dModels/neptune.glb";
      document.getElementById("planets_planet_uranus").id =
        "planets_planet_neptune";
      setTimeout(function () {
        document.getElementById("planets_planet_article").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_neptune").style.transform =
          "translateX(0vw)";
        document.getElementById("planets_planet_planetNumber").style.transform =
          "translateY(0vw)";
      }, 100);
      document.getElementById("planets_planet_planetName").style.transform =
        "translateY(0vw)";
      document.getElementById("planets_planet_mainTextP").style.transform =
        "translateX(0vw)";
    }, 500);
  }
};

function missionsListUnderLiner() {
  document.getElementById("missionsList1").style.textDecoration = "none";
  document.getElementById("missionsList2").style.textDecoration = "none";
  document.getElementById("missionsList3").style.textDecoration = "none";
  document.getElementById("missionsList4").style.textDecoration = "none";
  document.getElementById("missionsList5").style.textDecoration = "none";
  document.getElementById("missionsList6").style.textDecoration = "none";
  document.getElementById("missionsList7").style.textDecoration = "none";
  document.getElementById("missionsList8").style.textDecoration = "none";
}

var missionsTextTransition = new Audio("./sounds/siteOpenSound.mp3");
localStorage.setItem("missionsNumber", 0);
var missions_text = document.getElementById("missions_maintext_text");
function missionsNumberChanger(number) {
  if (number != 0 && number != 9) {
    missionsListUnderLiner();
    missionsTextTransition.currentTime = 0;
    missionsTextTransition.play();
  }
  switch (number) {
    case 1:
      localStorage.setItem("missionsNumber", 1);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>1. Discover the Unknown</h1><li>The vast expanse of space, a canvas painted with stars, nebulae, and galaxies, holds a captivating allure. It whispers secrets of the universe's origins, teases us with the possibility of extraterrestrial life, and ignites our curiosity to explore the unknown.</li><li>From the moment humanity first gazed at the night sky, we have been driven by an insatiable desire to understand our place in the cosmos. With each new discovery, we unravel more of the intricate tapestry of the universe, revealing its breathtaking beauty and humbling immensity.</li><li>The search for the unknown fuels our scientific endeavors, propelling us to build powerful telescopes, launch probes to distant planets, and push the boundaries of human ingenuity. Every mission, every observation, brings us closer to understanding the universe's grand design, its secrets, and its potential for life beyond our own planet.</li>";
      break;
    case 2:
      localStorage.setItem("missionsNumber", 2);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>2. Future Expeditions</h1><li>The next era of space exploration promises bold and ambitious missions. Future expeditions aim to go further than ever before, reaching the outermost planets of our solar system and even beyond. NASA and private space companies are planning missions to asteroids, distant moons, and Mars, paving the way for human colonies on other celestial bodies.</li><li>These missions will not only increase our understanding of the solar system’s history but also help develop technologies crucial for long-term space survival. Explorations of icy moons like Europa and Enceladus are of particular interest due to their potential to host life.</li><li>Every step forward in these future expeditions brings humanity closer to becoming an interplanetary species. As we push beyond our current limits, the possibilities for discovery and advancement seem endless, setting the stage for new eras of scientific achievement.</li>";
      break;
    case 3:
      localStorage.setItem("missionsNumber", 3);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>3. Interactive Learning</h1><li>Interactive learning platforms have transformed how we explore and understand space. With advanced simulations, virtual reality, and online resources, students, educators, and space enthusiasts can now embark on immersive journeys through the cosmos from the comfort of their homes.</li><li>These tools make complex scientific concepts more accessible and engaging. Users can virtually visit planets, galaxies, and even black holes, unlocking the mysteries of the universe at their own pace. Educational platforms allow learners to simulate space missions, calculate rocket trajectories, and explore distant stars.</li><li>Through interactive learning, people of all ages can become part of the space exploration experience. This dynamic approach brings the universe closer, inspiring curiosity and excitement for the future of space travel. It empowers the next generation of explorers by making space science approachable and captivating.</li>";
      break;
    case 4:
      localStorage.setItem("missionsNumber", 4);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>4. Exploring the Solar System</h1><li>The solar system is home to a wide array of planets, moons, and other celestial bodies, each offering unique opportunities for exploration. From the scorching surface of Mercury to the icy rings of Saturn, our solar neighborhood holds countless mysteries.</li><li>Current missions, such as those to Mars and Jupiter’s moons, have uncovered astonishing discoveries, revealing insights into planetary atmospheres, geologies, and histories. Robotic explorers, like the Mars rovers, continue to send back invaluable data about potential life-sustaining conditions on these planets.</li><li>As we further explore the solar system, missions to moons like Europa, Titan, and Ganymede offer exciting prospects. Scientists believe these moons could harbor life beneath their frozen surfaces. By unlocking the secrets of our own cosmic backyard, we not only learn more about our planet but also prepare for journeys beyond the solar system.</li>";
      break;
    case 5:
      localStorage.setItem("missionsNumber", 5);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>5. Space Technologies</h1><li>Space technologies are at the heart of modern exploration, driving advancements that make once impossible missions a reality. From powerful rockets to AI-powered rovers, these innovations push the boundaries of what we can achieve.</li><li>New propulsion systems, such as ion thrusters and reusable rockets, have revolutionized space travel, reducing costs and extending mission durations. Breakthroughs in robotics, such as autonomous landers and intelligent probes, allow for deeper exploration of distant planets without the need for constant human oversight.</li><li>Satellites also play a crucial role in modern space technologies, providing real-time data on Earth’s climate and improving communication networks. These advances are key to supporting future manned missions and space colonies. As technologies continue to evolve, they will open new frontiers for scientific discovery and allow humanity to explore the cosmos more efficiently than ever before.</li>";
      break;
    case 6:
      localStorage.setItem("missionsNumber", 6);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>6. Historical Missions</h1><li>Historical space missions have paved the way for the technological advancements we see today. Iconic missions like Apollo 11, which first landed humans on the Moon in 1969, are monumental achievements that shaped the future of space exploration.</li><li>The Voyager probes, launched in the 1970s, have traveled farther than any other human-made object, sending back data from the outer planets and even crossing into interstellar space. Similarly, the Hubble Space Telescope has provided stunning images of distant galaxies, expanding our understanding of the universe’s structure and history.</li><li>These and other missions laid the groundwork for today's advancements, from the International Space Station (ISS) to Mars rovers and private space ventures. Each mission is a step in humanity’s ongoing journey to explore the unknown, pushing the boundaries of what we can achieve.</li>";
      break;
    case 7:
      localStorage.setItem("missionsNumber", 7);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>7. Life on Other Planets</h1><li>One of the most captivating questions in space exploration is whether we are alone in the universe. The search for extraterrestrial life has driven countless missions to Mars, Europa, and beyond, where conditions might be favorable for life as we know it.</li><li>Scientists are focusing on planets and moons that have liquid water, such as Mars or Jupiter’s moon Europa, which may host subsurface oceans. Advanced telescopes, like the James Webb Space Telescope, are scanning exoplanets in distant star systems, searching for biosignatures — signs of life in their atmospheres.</li><li>While no definitive evidence of extraterrestrial life has been found, the possibility excites scientists and the public alike. The discovery of life beyond Earth would be one of the most profound moments in human history, reshaping our understanding of biology and our place in the universe.</li>";
      break;
    case 8:
      localStorage.setItem("missionsNumber", 8);
      document.getElementById(
        "missionsList" + localStorage.getItem("missionsNumber")
      ).style.textDecoration = "overline";
      missions_text.innerHTML =
        "<h1>8. Space and Ecology</h1><li>Space exploration is not just about reaching new frontiers; it also plays a crucial role in understanding and preserving our home planet. Satellites orbiting Earth monitor climate change, track deforestation, and provide critical data for environmental conservation.</li><li>By observing Earth from space, scientists gain a broader perspective on ecological changes, allowing for better planning and response to natural disasters. Space-based technologies also contribute to environmental protection by helping to predict weather patterns, manage resources, and mitigate the effects of climate change.</li><li>As humanity explores the cosmos, we must also remain committed to caring for Earth. Space technologies provide the tools to protect our planet, ensuring that future generations can enjoy both the wonders of Earth and the discoveries of the wider universe.</li>";
      break;
  }
}
function missionsTextChange(side) {
  switch (side) {
    case 0:
      if (localStorage.getItem("missionsNumber") != 0) {
        missionsNumberChanger(
          Number(localStorage.getItem("missionsNumber")) - 1
        );
      }
      break;
    case 1:
      if (localStorage.getItem("missionsNumber") != 9) {
        missionsNumberChanger(
          Number(localStorage.getItem("missionsNumber")) + 1
        );
      }
      break;
  }
}
