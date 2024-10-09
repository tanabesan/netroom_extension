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

function showSlide(index) {
    const slides = document.querySelectorAll('#slideshow .slide');
    const dots = document.querySelectorAll('.slideshow-dots span');

    // スライドの表示
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    // ドットのアクティブ状態の更新
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

// スライドを変更する関数
function changeSlide(direction) {
    currentSlideIndex += direction;

    // スライドの範囲を制限
    const slides = document.querySelectorAll('#slideshow .slide');
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // 最後のスライドに戻る
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // 最初のスライドに戻る
    }

    showSlide(currentSlideIndex);
}

// 初期スライドを表示
showSlide(currentSlideIndex);
