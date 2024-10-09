window.addEventListener("load", function() {
    const splashScreen = document.getElementById("splash-screen");
    setTimeout(function() {
        splashScreen.style.opacity = "0";
        splashScreen.style.transition = "opacity 0.5s ease";
        setTimeout(function() {
            splashScreen.style.display = "none";
        }, 500); // 0.5秒後に非表示
    }, 1850); // 1.85秒後にフェードアウトを開始
});

let currentSlideIndex = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    currentSlideIndex += n;

    // スライドのインデックスを循環させる
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // 最後のスライドに戻る
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // 最初のスライドに戻る
    }

    // スライドを非表示にする
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // 現在のスライドを表示する
    slides[currentSlideIndex].style.display = "block";
}
