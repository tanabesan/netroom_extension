window.addEventListener("load", function() {
    const splashScreen = document.getElementById("splash-screen");
    const logo = document.getElementById("splash-logo");

    // GIFを最初から再生するためにタイムスタンプを追加
    const originalSrc = logo.src;
    logo.src = `${originalSrc}?${new Date().getTime()}`;

    // ローディング画面のフェードアウト処理
    setTimeout(function() {
        splashScreen.style.opacity = "0"; // フェードアウト
        splashScreen.style.transition = "opacity 0.5s ease"; // アニメーション設定
        setTimeout(function() {
            splashScreen.style.display = "none"; // 0.5秒後に非表示
        }, 500); // 500ms後に非表示にする
    }, 1850); // 1850ms後にフェードアウトを開始
});

