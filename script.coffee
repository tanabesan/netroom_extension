window.addEventListener "load", ->
  splashScreen = document.getElementById "splash-screen"
  setTimeout ->
    splashScreen.style.opacity = "0"
    splashScreen.style.transition = "opacity 0.5s ease"
    setTimeout -> splashScreen.style.display = "none", 500
  , 1850
