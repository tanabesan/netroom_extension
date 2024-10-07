window.addEventListener("load", function() {
    const splashScreen = document.getElementById("splash-screen");
    const logo = document.getElementById("splash-logo");

    // ページをリロードするたびにGIFを最初から再生するため、タイムスタンプを追加
    const originalSrc = logo.src;
    logo.src = `${originalSrc}?${new Date().getTime()}`;

    // ローディング画面のフェードアウト処理
    setTimeout(function() {
        splashScreen.style.opacity = "0";
        splashScreen.style.transition = "opacity 0.5s ease";
        setTimeout(function() {
            splashScreen.style.display = "none";
        }, 500); // 0.5秒後に非表示
    }, 1850); // 1.85秒後にフェードアウトを開始
});

