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
let autoSlideInterval;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    currentSlideIndex += n;

    // スライドのインデックスを循環させる
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    // 全てのスライドを非表示にする
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // 現在のスライドを表示する
    slides[currentSlideIndex].classList.add('active');
}

// スライドを自動的に進める関数
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(1);
    }, 5000); // 5秒ごとに次のスライドに進む
}

// ページが読み込まれたら最初のスライドを表示して自動スライドショーを開始
document.addEventListener("DOMContentLoaded", () => {
    showSlide(0);
    autoSlide();
});

// スライドを手動で切り替えたときに自動スライドをリセットする
function resetAutoSlide() {
    clearInterval(autoSlideInterval);  // 自動スライドを停止
    autoSlide();  // 再度開始
}

// ボタンを押したときにスライドを切り替えつつ自動スライドをリセット
document.querySelector(".slideshow-dots").addEventListener("click", function(event) {
    if (event.target.classList.contains("dot")) {
        const index = Array.from(event.target.parentNode.children).indexOf(event.target) - 1;
        showSlide(index);
        resetAutoSlide();
    }
});
