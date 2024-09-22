/* 
NETROOM extensions load program
made by AAAAAAAAAAAA.
All rights reserved.
 */

/*
htmlタグ変更帯(LOADING)
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
        alert("前回のダークモード設定と変わってますな");
        console.log("前回のダークモード設定と変わってますな");//あとでシステムに合わせるか問うプログラムにあとで変える
    }
}
console.log(dark);

//UI二種類対応(ローカルストレージの値、designが1なら旧UI風、2ならディスコ風)

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

const body = document.querySelector('#body');
const load_1 = "<script src='style-1.js' defer></script>";

//変更
if (design == "1") {
    body.insertAdjacentHTML('beforeend', load_1);
} else {
    document.documentElement.innerHTML = main_html;
}
