// ==UserScript==
// @name        NETROOM extension
// @namespace    https://github.com/tanabesan/netroom_extension
// @version      beta0.2
// @icon         https://raw.githubusercontent.com/tanabesan/netroom_extension/refs/heads/main/white_logo_official.png
// @author       @tanabesan,@AAniki,@bakantrm,@FFT_dareka
// @match        https://netroom.oz96.com/*
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

/*
NETROOM extension load program
made by AAAAAAAAAAAA.
All rights reserved.
 */

//警告表示
console.log("%cSTOP！", "font-size: 65px; font-weight: bold; color: red; text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);");
console.log("%cこれは開発者向けのブラウザー機能です。", "font-size: 24px; font-weight: bold;");
console.log("%c誰かにここに何かをコピー・貼り付けするように言われた場合、それは第三者があなたのNETROOMアカウントへのアクセスを得るための詐欺・不正行為です。", "font-size: 18px;");
console.log("%c安全だと言われても%c絶対に貼り付け、実行をしないでください。", "font-size: 18px;", "color: red; font-weight: bold; font-size: 23px;");
console.log("%c詳細は https://www.weblio.jp/content/セルフXSS をご覧ください。", "font-size: 16px; font-style: italic;");


/*
style-2のhtmlタグ変更帯(LOADING)
*/

//スマホ識別
function PC() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return false;
    } else {
        return true;
    }
}

//ダークモード対応
if (localStorage.hasOwnProperty("darkmode")) {
    var dark = localStorage.getItem("darkmode");
} else {
    var dark = "";
}
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
if (dark == "") {
    if (isDarkMode() == true) {
        dark = "dark";
        localStorage.setItem('darkmode', 'dark');
    } else {
        dark = "light";
        localStorage.setItem('darkmode', 'light');
    }
} else {
    if (dark == "dark") {
        dark = "dark";
    } else {
        dark = "light";
    }
}
if (localStorage.hasOwnProperty("darkmode")) {
    var old_sys_dark = localStorage.getItem("sys-darkmode");
    console.log("old_sys_dark: " + old_sys_dark);
}

if (isDarkMode() == true) {
    var sys_dark = "dark";
    localStorage.setItem('sys-darkmode', 'dark');
} else {
    var sys_dark = "light";
    localStorage.setItem('sys-darkmode', 'light');
}

if (old_sys_dark) {
    if (sys_dark == old_sys_dark) { console.log("なにもおきません") } else {
        alert("ライトモードかダークモード、変えたでしょ");
        console.log("前回のダークモード設定と変わってますな");//あとでシステムに合わせるか問うプログラムにあとで変える
    }
}
console.log(dark);
if (navigator.cookieEnabled)  // cookieが使えるか確認
{
    document.cookie = "dark=" + dark + ";  max-age=20;";
} else {
    alert("おら、cookie有効にして出直してきやがれ");
    document.documentElement.innerHTML = "";
}

//UI二種類対応(ローカルストレージの値、e-uiがoldなら旧UI風、newなら新UI)

if (localStorage.hasOwnProperty("e-ui")) {
    var e_ui = localStorage.getItem("e-ui");
} else {
    var e_ui = "new";
    localStorage.setItem('e-ui', e_ui);
}

//スマホ対応

if (PC() == true) {

} else {

}

//デザイン2のベースHTML

let main_html = `

`;

var script = document.createElement('script');
script.src = 'https://tanabesan.github.io/netroom_extension/style-1.js';

console.log("dark:" + dark);

let theme_l = "";
if (dark == "dark") {
    theme_l = "D";
} else {
    theme_l = "L";
}
console.log(theme_l);

let theme_c = "";
if (dark == "dark") {
    theme_c = "000000";
} else {
    theme_c = "D8D8D8";
}
console.log(theme_l);

//変更
if (e_ui == "old") {
    document.head.appendChild(script);

    // スプラッシュスクリーンのCSSを挿入 (必要に応じて調整)
    const style_1 = document.createElement('style');
    style_1.textContent = `
        #splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #` + theme_c + `;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99;

            display: flex;
            flex-direction: column;
        }

        #splash-screen .logo_l {
            max-width: 50%;
            max-height: 50%;
            height: auto;
        }

        #splash-screen .logo_l_2 {
            max-width: 50%;
            max-height: 50%;
            width: 3vw;
            height: auto;
        }
    `;
    document.head.appendChild(style_1);

    // スプラッシュスクリーンのHTML構造
    const splashScreenHtml = `
            <img src="https://tanabesan.github.io/netroom_extension/img/FLASH_LOGO_` + theme_l + `.gif" alt="Logo" class="logo_l">
            <br>
            <img src="https://tanabesan.github.io/netroom_extension/img/loading_2.gif" class="logo_l_2"></img>
    `;

    console.log(`https://tanabesan.github.io/netroom_extension/img/FLASH_LOGO_` + theme_l + `.gif`);
    const splashScreenElement = document.createElement('div');
    splashScreenElement.id = "splash-screen";
    splashScreenElement.style.zIndex = "99";
    splashScreenElement.innerHTML = splashScreenHtml;

    // bodyの最初の子要素の前に挿入
    document.body.insertBefore(splashScreenElement, document.body.firstChild);
} else {
    //document.documentElement.innerHTML = main_html;
    document.head.appendChild(script);
}

//favicon変更

document.querySelector('link[rel="shortcut icon"]').href = "https://tanabesan.github.io/netroom_extension/white_logo_official.png";
