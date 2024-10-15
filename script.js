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
    
    // 次のスライドのインデックスを計算
    let nextSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;

    // スライドの状態をリセット
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'next', 'prev');
    }

    // 現在のスライドと次のスライドを設定
    slides[currentSlideIndex].classList.add('active');
    slides[nextSlideIndex].classList.add(n > 0 ? 'next' : 'prev');

    // スライドのインデックスを更新
    currentSlideIndex = nextSlideIndex;
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
document.getElementById("prev").onclick = () => {
    showSlide(-1);
    resetAutoSlide();
};

document.getElementById("next").onclick = () => {
    showSlide(1);
    resetAutoSlide();
};

