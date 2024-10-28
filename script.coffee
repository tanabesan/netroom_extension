window.addEventListener "load", ->
  splashScreen = document.getElementById "splash-screen"
  splashScreen.style.display = "block"  # 初期表示をブロックに設定
  setTimeout ->
    splashScreen.style.opacity = "0"
    splashScreen.style.transition = "opacity 0.5s ease"
    setTimeout -> splashScreen.style.display = "none", 500
  , 1850
