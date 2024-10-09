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

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slideshow-dots")[0].children;

    // 全スライドを非表示
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 全てのドットを非アクティブ状態に
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // スライドのインデックスを増やす
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // 現在のスライドとドットをアクティブにする
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";

    // 3秒ごとにスライドを切り替え
    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

