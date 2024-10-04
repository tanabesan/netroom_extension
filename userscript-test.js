// ==UserScript==
// @name        NETROOM extension
// @namespace    https://github.com/tanabesan/netroom_extension
// @version      beta0.0
// @icon         https://raw.githubusercontent.com/tanabesan/netroom_extension/refs/heads/main/white_logo_official.png
// @author       @tanabesan,@AAniki,@fy1215
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
    if (sys_dark == old_sys_dark) {console.log("なにもおきません") } else {
        alert("ライトモードかダークモード、変えたでしょ");
        console.log("前回のダークモード設定と変わってますな");//あとでシステムに合わせるか問うプログラムにあとで変える
    }
}
console.log(dark);

//UI二種類対応(ローカルストレージの値、designが1なら旧UI風、2なら新UI)

if (localStorage.hasOwnProperty("design")) {
    var design = localStorage.getItem("design");
} else {
    var design = "2";
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


/* UI2も完成したら

//変更
if (design == "1") {
    document.head.appendChild(script);
} else {
    document.documentElement.innerHTML = main_html;
}

*/
document.head.appendChild(script);

