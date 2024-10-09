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
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slideshow-dots span');

function showSlide(index) {
    // すべてのスライドを非表示にする
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // すべてのドットを非アクティブにする
    dots.forEach((dot) => {
        dot.classList.remove('active-dot');
    });

    // 指定したスライドを表示する
    slides[index].style.display = 'block';
    dots[index].classList.add('active-dot');

    // 現在のインデックスを更新
    currentSlideIndex = index;
}

function changeSlide(n) {
    let newIndex = currentSlideIndex + n;

    if (newIndex >= slides.length) {
        newIndex = 0; // 最後のスライドから最初へ
    } else if (newIndex < 0) {
        newIndex = slides.length - 1; // 最初のスライドから最後へ
    }

    showSlide(newIndex);
}

// 初期スライドを表示
showSlide(currentSlideIndex);
