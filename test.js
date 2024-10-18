//ダークモード対応
let dark_2;

if (localStorage.hasOwnProperty("darkmode")) {
	dark_2 = localStorage.getItem("darkmode");
} else {
	dark_2 = "";
}

function isDarkMode() {
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
if (dark_2 == "") {
	if (isDarkMode() == true) {
		dark_2 = "dark";
		localStorage.setItem('darkmode', 'dark');
	} else {
		dark_2 = "light";
		localStorage.setItem('darkmode', 'light');
	}
} else {
	if (dark_2 == "dark") {
		dark_2 = "dark";
	} else {
		dark_2 = "light";
	}
}

let old_sys_dark_2 = "";

if (localStorage.hasOwnProperty("darkmode")) {
	old_sys_dark_2 = localStorage.getItem("sys-darkmode");
}
let sys_dark_2;

if (isDarkMode() == true) {
	sys_dark_2 = "dark";
	localStorage.setItem('sys-darkmode', 'dark');
} else {
	sys_dark_2 = "light";
	localStorage.setItem('sys-darkmode', 'light');
}

if (old_sys_dark_2 == "") {
	if (sys_dark_2 == old_sys_dark_2) {
		console.log("なにもおきません")
	} else {
		createOverlay();
		updateText(
			"<img src='https://netroom.oz96.com/css/icon/err.png' alt='㊟' width='24' height='24'>システムテーマが変更されました。設定を同期しますか？<br><br><button onclick='removeOverlay();' style='font-size:22px;'><b>いいえ</b></button><button onclick='syn_theme();' style='font-size:22px;'><b>はい</b></button>"
		);
	}
}

function syn_theme() {
	if (isDarkMode() == true) {
		dark_2 = "dark";
		localStorage.setItem('darkmode', 'dark');
	} else {
		dark_2 = "light";
		localStorage.setItem('darkmode', 'light');
	}
}

//css変更帯

let css = "";

if (dark_2 == "dark") {
	css =
		` body,
html {
    background-color: #1f1f1f !important;
    color: #ffffff !important;
    user-select: none
}

#d_user_list,
.dialog,
.mes_wrap,
nonroom,
.inshadow,
.d_inner,
.dialog_small {
    background-color: #1f1f1f !important;
}

a {
    color: #87cefa !important;
}

.clearfix {
    color: #0067C0 !important;
}

.btn:not(#b_open_notice > span),
.on {
    background-color: #0067C0 !important;
    color: #ffffff !important;
}

#b_send {
    height: 32px;
}

.comd,
.m_time,
.cat1,
.at_uname,
.m_no,
.cat2,
.user_name,
#room_title,
.m_uname {
    color: #ffffff !important;
}

#comment {
    border-color: #0067C0 !important;
}

header,
footer,
nav,
.header_inner,
.wrapper,
.box,
.list,
.tab,
.menu,
.tabs,
.clearfix,
.category,
.sidebar {
    background-color: #1f1f1f !important;
    border-color: #333 !important;
    color: #87cefa !important;
}

img {
    filter: brightness(0.8) contrast(1.2) !important;
}

.s1 .rm a,
.s0 .rm a,
.s2 .rm a,
.s3 .rm a,
.s4 .rm a,
.s5 .rm a,
.s4_wrap .rm a,
.user .rm a {
    color: #ffffff !important;
}

.s0,
.s1,
.s3,
.s4,
.s5,
.purple-class {
    background-color: #1f1f1f !important;
    color: #87cefa !important;
}

.purple-class {
    color: #87cefa !important;
}

.uploadButton {
    background-color: #1f1f1f;
    border: 1px solid #333333;
    padding: 5px;
    border-radius: 3px;
}

#comment,
#i_pvt_msg {
    background: #1f1f1f;
    color: #FFFFFF;
}

img.user,
#comment_photo img,
#icon_table img {
    border-radius: 50%;
}

#user_list .user,
#guest>div>span.s1>img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

.ga {
    position: fixed;
    right: 456px;
}

#d_user_list2 {
    position: fixed;
    height: 885px;
    background: 0;
}

#twitter-widget-0 {
    display: none;
}

img.selected {
	border: 3px solid #0067C0 !important;
}

.you img.user {
	border:2px solid #0067C0 !important;
}


  #tool_btn_a,
  #tool_btn_b,
  #tool_btn_c {
    background: none repeat scroll 0 0 #fff;
    color: #333;
    font-family: メイリオ;
    font-size: 11px;
    height: 24px;
    line-height: 1;
    margin-top: 9px;
    padding: 0 15px;
    vertical-align: top;
  }

  #tool_btn_a:hover,
  #tool_btn_b:hover,
  #tool_btn_c:hover {
    background:#efefef;
  }

  #room_listb .cat2:hover {
	background: none repeat scroll 0 0 #0c3c65;
	border-radius: 3px;
	color: #333;
	cursor:pointer;
}

  #d_user_list3 {
        background-color :#1f1f1f;
	border-radius: 3px;
  }

  .col{
	color: #ffffff;
}

#wrap_container {
	width:100%;
	margin:auto;
	display:block;
	max-width:100%;
}

#box2 {
	margin:0;
	max-width:100%;
}

body[data-isroom="0"] #box1{
	float:left;
	max-width:100%;
}

.ga {
    position: fixed;
    right: 0px;
}

`;
}
if (dark_2 == "light") {
	css =
		` body,
html {
    background-color: #ffffff !important;
    color: #000000 !important;
    user-select: none
}

#d_user_list,
.dialog,
.mes_wrap,
nonroom,
.inshadow,
.d_inner,
.dialog_small {
    background-color: #ffffff !important;
}

a {
    color: #87cefa !important;
}

.clearfix {
    color: #0067C0 !important;
}

.btn:not(#b_open_notice > span),
.on {
    background-color: #0067C0 !important;
    color: #000000 !important;
}

#b_send {
    height: 32px;
}

.comd,
.m_time,
.cat1,
.at_uname,
.m_no,
.cat2,
.user_name,
#room_title,
.m_uname {
    color: #000000 !important;
}

#comment {
    border-color: #0067C0 !important;
}

header,
footer,
nav,
.header_inner,
.wrapper,
.box,
.tab,
.tabs,
.menu,
.clearfix,
.category,
.sidebar {
    background-color: #ffffff !important;
    border-color: #333 !important;
    color: #87cefa;
}

.front_menu {
	font-size:12px;
	color:#87cefa;
	text-align:right;
	vertical-align:middle;
	margin-left:5px;
	margin-right:5px;
	height:1.5em;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	font-weight:bold;
	display:inline-block;
	max-width:120px;
	text-decoration:underline;
}

.list
{
    background-color: #cccccc !important;
    border-color: #333 !important;
    color: #87cefa !important;
}

img {
    filter: brightness(0.8) contrast(1.2) !important;
}

.s1 .rm a,
.s0 .rm a,
.s2 .rm a,
.s3 .rm a,
.s4 .rm a,
.s5 .rm a,
.s4_wrap .rm a,
.user .rm a {
    color: #000000 !important;
}

.s0,
.s1,
.s3,
.s4,
.s5,
.purple-class {
    background-color: #ffffff !important;
    color: #87cefa !important;
}

.purple-class {
    color: #87cefa !important;
}

.uploadButton {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    padding: 5px;
    border-radius: 3px;
}

#comment,
#i_pvt_msg {
    background: #ffffff;
    color: #000000;
}

img.user,
#comment_photo img,
#icon_table img {
    border-radius: 50%;
}

#user_list .user,
#guest>div>span.s1>img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

.ga {
    position: fixed;
    right: 456px;
}

#d_user_list2 {
    position: fixed;
    height: 885px;
    background: 0;
}

#twitter-widget-0 {
    display: none;
}

img.selected {
	border: 3px solid #0067C0 !important;
}

.you img.user {
	border:2px solid #0067C0 !important;
}


  #tool_btn_a,
  #tool_btn_b,
  #tool_btn_c {
    background: none repeat scroll 0 0 #dddddd;
    color: #000;
    font-family: メイリオ;
    font-size: 11px;
    height: 24px;
    line-height: 1;
    margin-top: 9px;
    padding: 0 15px;
    vertical-align: top;
  }

  #tool_btn_a:hover,
  #tool_btn_b:hover,
  #tool_btn_c:hover {
    background:#aaaaaa;
  }

  #room_listb .cat2:hover {
	background: none repeat scroll 0 0 #0c3c65;
	border-radius: 3px;
	color: #0d0;
	cursor:pointer;
}

#return_btn {
	background: none repeat scroll 0 0 #dddddd;
	color: #000;
	font-family: メイリオ;
	font-size: 11px;
	height: 24px;
	line-height: 1;
	margin-top: 9px;
	padding: 0 15px;
	vertical-align: top;
}
#return_btn:hover {
	background:#aaaaaa;
}

  #d_user_list3 {
        background-color :#ffffff;
		border-radius: 3px;
  }

.col{
	color: #1f1f1f;
}

#wrap_container {
	width:100%;
	margin:auto;
	display:block;
	max-width:100%;
}

#box2 {
	margin:0;
	max-width:100%;
}

body[data-isroom="0"] #box1{
	float:left;
	max-width:100%;
}

.ga {
    position: fixed;
    right: 0px;
}

`;
}

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
$('body').css('background-image',
	'url("https://yinkya.github.io/ip/IMG_0379.jpeg")');


function show_room_name(res) {
	roomnam = res.room_name;
	roomdes = res.room_desc;
	lastupd = res.room_update_time;
	//adminam = res.admi_name;
	adminid = res.a_admi;
	var room_id = res.room_id;
	var w_permition = res.w_permition;
	prev_room_id = disp_room_id;
	disp_room_id = room_id;
	leaved_room = "";
	view_at_join_room(w_permition);
	$('#room_title').replaceWith('<div id="room_title"></div>');
	$('#room_title').html(
		'<marquee style="display:inline-block; width: 100%;" scrollamount="6">' +
		res.room_name + '</marquee>');
	$('#room_title').css({
		'width': '90%',
		'box-sizing': 'border-box'
	});


	if (_MY_SP_ == '1') {
		$('#room_title2').html('<marquee><h1 id="room_title">' + res.room_name +
			'</h1></marquee>')
	}
	var imgdata = "";
	var html = "";
	html += '<div class="comment"><div class="l">' + img_users_pict(res.a_admi[0],
		res.admi_img_no) + '</div>';
	html += '<div class="r">';
	html += '<div class="comment_head"><span class="m_no">' +
		'</span><span class="m_uname">' + res.admi_name +
		'</span><span class="m_time">' + date_f(res.room_update_time) +
		'</span></div>';
	html += '<div class="comd">' + imgdata + comvert_msg(res.room_desc) + '</div>';
	html += '</div></div>';
	$('#room_desc').html(html);
	var uid_data = {};
	uid_data[res.a_admi[0]] = [res.admi_name, res.admi_img_no];
	add_user_store(uid_data);
	var a_admi = res.a_admi;
	admi_flag = 0;
	if (a_admi) {
		for (var i = 0; i < a_admi.length; i++) {
			if (a_admi[i] == uid) {
				admi_flag = 1
			}
		}
	}
	if (admi_flag) {
		sp_d_show();
		$('#b_change_room_info').show()
	} else {
		$('#b_change_room_info').hide()
	}
	coloring_joined_room()
}


var intervalId;

function set_url_mode(room_id, page, title, cmd) {
	now_cmd = cmd;
	var disp_room_id = get_parameter();
	var disp_page = get_parameter(1);

	if (!validator.isNumeric(room_id + "")) {
		room_id = 0;
	}

	if (!validator.isNumeric(page + "")) {
		page = 0;
	}

	var url_page = "";
	if (page) {
		url_page = page;
	}

	var max_page = "";
	if (typeof(last_msg_seq[room_id]) != 'undefined') {
		var room_last_seq = last_msg_seq[room_id];
		max_page = which_page(room_last_seq);
	}

	if (max_page == url_page) {
		url_page = "";
		page = 0;
	}

	if (disp_room_id == room_id && disp_page == page) {
		get_page(1);
		return;
	}

	if (room_id - 0) {
		var _suf = '&p=';

		if (Number(url_page) < 1) {
			_suf = '';
		}

		var url_param = "/?r=" + room_id + _suf + url_page;

		if (title) {
			title = title + ' | NETROOM Extensionsᅟᅟᅟ';
		} else {
			title = document.title;
		}
	} else {
		var url_param = "/";
		title = 'Room List | NETROOM Extensionsᅟᅟᅟ';
	}

	History.pushState({
		room_id: room_id,
		page: page
	}, title, url_param);

	if (Number(url_page) < 1) {
		twiFunc();
	}

	var scrollTitle = title;
	clearInterval(intervalId);

	intervalId = setInterval(function() {
		scrollTitle = scrollTitle.substring(1) + scrollTitle.substring(0, 1);
		document.title = scrollTitle;
	}, 800);
}


var clock = document.createElement('div');
clock.id = 'clock';
clock.style.display = 'inline';
if (dark_2 == "dark") {
	clock.style.color = 'white';
} else {
	clock.style.color = 'black';
}
clock.style.fontSize = '13pt';

function updateClock() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ampm = hours >= 12 ? '午後' : '午前';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	clock.textContent = ampm + ' ' + hours + '時 ' + minutes + '分 ' + seconds + '秒';
}

setInterval(updateClock, 500);

var myinfowrap = document.getElementById("myinfowrap");
myinfowrap.insertBefore(clock, myinfowrap.firstChild);

//twitter(旧X)消えろ


//ツールボタンB
var toolButtonA = document.createElement('button');
toolButtonA.id = 'tool_btn_a';
toolButtonA.textContent = '仮ボタンa';
toolButtonA.style.display = 'inline';
var returnButton = document.getElementById('return_btn');
returnButton.parentNode.insertBefore(toolButtonA, returnButton.nextSibling);
toolButtonA.addEventListener('click', function() {
	//write code here
});

// ツールボタンB
var toolButtonB = document.createElement('button');
toolButtonB.id = 'tool_btn_b';
toolButtonB.textContent = '仮ボタンb';
toolButtonB.style.display = 'inline';
returnButton.parentNode.insertBefore(toolButtonB, returnButton.nextSibling);
toolButtonB.addEventListener('click', function() {
	//write code here
});

// ツールボタンC
var toolButtonC = document.createElement('button');
toolButtonC.id = 'tool_btn_c';
toolButtonC.textContent = 'ログ検索';
toolButtonC.style.display = 'inline';
toolButtonC.style.marginLeft = '10px';
returnButton.parentNode.insertBefore(toolButtonC, returnButton.nextSibling);
toolButtonC.addEventListener('click', function() {
	popup.style.display = 'block';
});

//ヘルプタブ表示
var tabother = document.createElement("div");
tabother.classList.add("tab", "tab_setting");
tabother.id = "tab_setting";
tabother.innerHTML = '<span>機能設定</span>';
document.getElementById("box3").querySelector(".tabs").appendChild(tabother);


function switch_tab_user_or_friends(friends) {
	if (friends == "b") {
		var $t = $("div.tab_friends");
		var $t_out = $("div.tab_user_in_room_2");
		var $t_out2 = $("div.tab_setting");
		$("#d_user_list3").hide();
		$("#d_user_list2").show();
		$("#d_user_list").hide();
		if (_MY_SP_) {
			$('#tab_user_in_room').hide()
		}
	}
	if (friends == "a") {
		var $t = $("div.tab_user_in_room_2");
		var $t_out = $("div.tab_friends");
		var $t_out2 = $("div.tab_setting");
		$("#d_user_list").show();
		$("#d_user_list2").hide();
		$('#tab_user_in_room').show()
		$("#d_user_list3").hide();
	}


	if (friends == "c") {
		var $t = $("div.tab_setting");
		var $t_out = $("div.tab_friends");
		var $t_out2 = $("div.tab_user_in_room_2");
		$("#d_user_list").hide();
		$("#d_user_list2").hide();
		$("#d_user_list3").show();
	}

	if (friends == "a" || friends == "b" || friends == "c") {
		$t.addClass('selected');
		$t_out.removeClass('selected')
		$t_out2.removeClass('selected')
	} else {

	}
}


$('.tab_user_in_room_2').off(_E.clickd, switch_tab_user_or_friends);

$('.tab_user_in_room_2').on("click", function(e) {
	//		e.preventDefault();
	switch_tab_user_or_friends("a");
});

$('.tab_friends').off(_E.clickd, switch_tab_user_or_friends);

$('.tab_friends').on("click", function(e) {
	//		e.preventDefault();
	switch_tab_user_or_friends("b");
});


$('.tab_setting').on("click", function(e) {
	//		e.preventDefault();
	switch_tab_user_or_friends("c");
});

let set_w_d = "";
let set_d_d = "";
if (dark_2 == "dark") {
	set_d_d = ' checked=""';
} else {
	set_w_d = ' checked=""'
}


if (localStorage.hasOwnProperty("e-ui")) {
	var now_ui = localStorage.getItem("e-ui");
} else {
	var now_ui = "new";
	localStorage.setItem('e-ui', e - ui);
}
let set_u_o = "";
let set_u_n = "";
if (now_ui == "old") {
	set_u_n = ' checked=""';
} else {
	set_u_o = ' checked=""'
}

// 要素を生成（テキストで要素を作る場合）
const element_b = document.querySelector('#box3');
const createElement_b =
	`
        <div id="d_user_list3" style="display: block;">
          <center><h1 class="col">NETROOM extension 機能設定</h1></center>
             <center>
<fieldset>
<legend>テーマカラー</legend>
<label><input type="radio" name="col" value="light"` +
	set_w_d +
	` onClick="change_theme('dark');">ライト</label>
<label><input type="radio" name="col" value="dark"` +
	set_d_d +
	` onClick="change_theme('light');">ダーク</label>
</fieldset>
<fieldset>
<legend>テーマカラー</legend>
<label><input type="radio" name="ui" value="old"` +
	set_u_o +
	` onClick="change_ui('old');">UI1</label>
<label><input type="radio" name="ui" value="new"` +
	set_u_n +
	` onClick="change_ui('new');">UI2</label>
</fieldset>
           </center>

          </ul>
	</div>
`;

// 最初の子要素として追加
element_b.insertAdjacentHTML('beforeend', createElement_b);

$("#d_user_list3").hide();

//ダークモード変更

let dark_3 = dark_2;

function change_theme(theme_name) {
	if (theme_name == dark_3) {
		var theme_new = "";
		if (theme_name == "dark") {
			theme_new = "light";
		} else {
			theme_new = "dark";
		}
		dark_3 = theme_new;
		localStorage.setItem('darkmode', theme_new);
		createOverlay();
		updateText(
			"<img src='https://netroom.oz96.com/css/icon/err.png' alt='㊟' width='24' height='24'>変更は次回のロード時に反映されます。<br><br><button onclick='removeOverlay();' style='font-size:22px;'><b>→了解したのであります←</b></button>"
		);
	}
}

let now_ui_2 = now_ui;

function change_ui(ui_name) {
	if (ui_name == now_ui_2) {
		var ui_new = "";
		if (ui_name == "old") {
			ui_new = "new";
		} else {
			ui_new = "old";
		}
		now_ui_2 = ui_new;
		localStorage.setItem('e-ui', ui_new);
		createOverlay();
		updateText(
			"<img src='https://netroom.oz96.com/css/icon/err.png' alt='㊟' width='24' height='24'>変更は次回のロード時に反映されます。<br><br><button onclick='removeOverlay();' style='font-size:22px;'><b>→了解したのであります←</b></button>"
		);
	}
}


//部屋リスト自動更新30s毎

var auto_l = document.createElement('div');
auto_l.id = 'clock';
auto_l.style.display = 'inline';
if (dark_2 == "dark") {
	auto_l.style.color = 'white';
} else {
	auto_l.style.color = 'black';
}
auto_l.style.fontSize = '5pt';

let auto_l_time = 30;

function updateAuto() {
	auto_l_time = auto_l_time - 1;
	if (auto_l_time == 0) {
		var parameter = {
			'category': selected_category,
			'room_name': searched_room_name,
			'update_time': ""
		};
		auto_l.textContent = "Loading";
		auto_l_time = 30;
		socket.json.emit('get_room_list', parameter);
	} else {
		auto_l.textContent = "自動更新まであと" + auto_l_time + "秒";
	}
}

setInterval(updateAuto, 1000);

var myinfowrap = document.getElementById("reload_btn_wrap");
myinfowrap.insertBefore(auto_l, myinfowrap.nextChild);


// 半透明な灰色の壁を作成する関数
let overlay = null;
let loadingText = null;

function createOverlay() {
	if (overlay) {
		overlay.remove();
	}

	// オーバーレイ要素の作成
	overlay = document.createElement('div');
	overlay.classList.add('overlay');

	// スタイルの設定
	overlay.style.position = 'fixed';
	overlay.style.top = '0';
	overlay.style.left = '0';
	overlay.style.width = '100%';
	overlay.style.height = '100%';
	overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
	overlay.style.zIndex = '2';

	// テキスト要素の作成
	loadingText = document.createElement('div');
	loadingText.style.color = '#ffffff';
	loadingText.style.fontSize = '24px';
	loadingText.style.textAlign = 'center';
	loadingText.style.position = 'absolute';
	loadingText.style.top = '50%';
	loadingText.style.left = '50%';
	loadingText.style.transform = 'translate(-50%, -50%)';

	// オーバーレイ要素にテキスト要素を追加
	overlay.appendChild(loadingText);

	// ボディ要素にオーバーレイ要素を追加
	document.body.appendChild(overlay);
}


// 変数の値を更新する関数
function updateText(text) {
	if (loadingText) {
		loadingText.innerHTML = text;
	}
}


// 半透明な灰色の壁を削除する関数
function removeOverlay() {
	let overlay = document.querySelector('.overlay');
	if (overlay) {
		document.body.removeChild(overlay);
	}
}

//ホームのようこそ削除
const home_uzai = document.getElementById('topimg_wrapper');
home_uzai.remove();
//吹き出し削除
const fukidashi_uzai = document.getElementById('myinfowrap_fikidashi');
fukidashi_uzai.remove();


//クラgif回避

function img_users_pict(uid, img_no, status, selected) {
	if (uid == '' || uid == 'guest') {
		var img = 'guest';
		img_no = 1
	} else if (!img_no) {
		var img = 'no_img';
		img_no = 0
	} else {
		var img = uid
	}
	if (selected) {
		selected = ' selected'
	} else {
		selected = ''
	}
	return '<img class="user' + selected + '" data-uid="' + uid +
		'" data-img_no="' + img_no + '" img_url="https://netroom.oz96.com/img/user2/' +
		img + '/' + img_no +
		'.jpg" src="https://tanabesan.github.io/netroom_extension/img/loading_img.png">'
}


setInterval(() => {

	// すべての img タグを取得
	let imgElements = document.querySelectorAll('img');

	// 各 img タグに対して処理を行う
	imgElements.forEach(img => {
		// img_url 属性の値を取得
		let imgUrl = img.getAttribute('img_url');

		// img_url が存在する場合、src 属性に設定
		if (imgUrl) {


			let img_1 = new Image();

			// 画像の読み込み完了時のイベントリスナー
			img_1.onload = () => {
				let width = img_1.width;
				let height = img_1.height;

				if (width > 5000 || height > 5000) {
					img.src =
						"https://tanabesan.github.io/netroom_extension/img/blocked.jpg";
					show_notice({
							'msg': 'クラッシュgifをブロックしました！'
						})
						// ここで、画像サイズが大きい場合の処理を追加できます。
						// 例：アラートを表示する、別の画像に置き換えるなど
				} else {
					img.src = imgUrl;
				}
			};

			// 画像の読み込みエラー時のイベントリスナー
			img_1.onerror = () => {
				img.removeAttribute('img_url');
			};

			// 画像の読み込み開始
			img_1.src = imgUrl;


			// 不要な img_url 属性を削除 (任意)
			img.removeAttribute('img_url');
		}
	});


}, 100);

//通常画像ブロック

function show_msg(room_id, res, ini_flag, target, nowHeight) {
	$('.nonroom', $('#body')).each(function() {
		$(this).show()
	});
	$('#d_received_msg').hide();
	if (res.length == 0) {
		$('#prev_page').hide();
		$('#next_page').hide();
		$_view.html('');
		last_msg_seq[room_id] = 0;
		$('#page_no').html('1ページ目');
		disp_page = 1;
		m_hide();
		if (google_analytics) {
			var url = "/" + room_id + "/";
			ga('send', 'pageview', url)
		}
		if (room_id) {
			var mode = 1;
			pc_mode(mode)
		} else {
			var mode = 0;
			pc_mode(mode)
		}
		return
	}
	var html = "";
	var last_id = "";
	var last_seq = 0;
	for (var i = 0; i < res.length; i++) {
		if (res[i]["comment"] != undefined) {
			data = res[i];
			if (data.uname == '') {
				name = 'ゲスト'
			} else {
				name = data.uname;
				if (data.character_name) {
					name = data.character_name + '<span class="at_uname">@' + name + '</span>'
				}
				var uid_data = {};
				uid_data[data.uid] = [data.uname, data.img_no];
				add_user_store(uid_data)
			}
			if (data.uid == "" || data.uid == "guest" || data.uid == undefined) {
				data.img_no = 0;
				var img = 'guest'
			} else {
				var img = data.uid
			}
			if (target == 1) {
				var id_head = "oc"
			} else {
				var id_head = "c"
			}
			if (data.img) {
				var file = data.img;
				var imgdata =
					'<br><img class="click_img" img_url="https://netroom.oz96.com/img/tmp/' +
					room_id + '_' + data["seq"] +
					'.jpg"  src="https://tanabesan.github.io/netroom_extension/img/loading_img.png">'
			} else {
				var imgdata = ""
			}
			var is_aa = '';
			if (data.comment.indexOf('　 ') !== -1) {
				is_aa = ' is_aa'
			}
			html += '<div id="' + id_head + data["seq"] + '" class="comment clearfix" >';
			html += '<div class="l">' + img_users_pict(data.uid, data.img_no) + '</div>';
			html += '<div class="r">';
			html += '<div class="comment_head"><span class="m_no">' + data["seq"] +
				'</span><span class="m_uname">' + name + '</span><span class="m_time">' +
				date_f(data.time) + '</span></div>';
			html += '<div class="comd' + is_aa + '">' + comvert_msg(data.comment) +
				imgdata + '</div>';
			html += '</div>';
			html += '</div>';
			last_id = 'c' + data["seq"];
			last_seq = data["seq"] - 0
		}
	}
	if (target == 1) {
		$('#d_msg_one div.h').html(
			'<div class="h clearfix ipop_title"><small class="link_pankuzu">≫' + data[
				"seq"] +
			'</small><div class="d_close"><span class="close" id="close_d_msg_one">&#12288;×&#12288;</span></div></div>'
		);
		$('#close_d_msg_one').unbind(_E.clickd);
		$('#close_d_msg_one').bind(_E.clickd, function(e) {
			e.preventDefault();
			$('#d_msg_one').hide();
			sp_d_hide()
		});
		$('#d_msg_one').show();
		$('#ul_msg_one').html(html);
		m_hide();
		return
	}
	var page = get_parameter(1);
	if (!page) {
		last_msg_seq[room_id] = last_seq
	}
	var room_last_seq = last_msg_seq[room_id];
	var this_last_seq = res[(res.length - 1)].seq;
	if (ini_flag == 1 || ini_flag == 2) {
		if (res[0]['seq'] <= 1) {
			$('#prev_page').hide();
			$('#totop2').hide()
		} else {
			$('#prev_page').show();
			$('#totop2').show()
		}
		if ((!room_last_seq) || this_last_seq < room_last_seq) {
			$('#next_page').show();
			$('#tobottom2').show()
		} else {
			$('#next_page').hide();
			$('#tobottom2').hide()
		}
	} else {
		if (last_seq % msg_limit == 0) {
			$('#next_page').show();
			$('#tobottom2').show();
			to_bottom('div_view', 0)
		}
	}
	if (ini_flag == 1) {
		$_view.html(html);
		var page = which_page(last_seq);
		$('#page_no').html(page + 'ページ目');
		if (room_id) {
			var mode = 1;
			pc_mode(mode)
		} else {
			var mode = 0;
			pc_mode(mode)
		}
	} else if (ini_flag == 2) {
		$_view.html(html);
		var page = which_page(last_seq);
		$('#page_no').html(page + 'ページ目');
		if (jump_bottom) {
			to_bottom('div_view', 0)
		} else {
			to_top('div_view', 0)
		}
		now_page = which_page(last_seq)
	} else {
		var bandai = "";
		var bandai2 = "";
		var bandai = which_page(last_seq);
		if (bandai == disp_page) {
			if (_MY_SP_ != '1') {
				var _cur_scroll = $("#div_view").scrollTop();
				_cur_scroll = _cur_scroll;
				var _max_scroll = $("#div_view_in").outerHeight() - $("#div_view").height() -
					100
			} else {
				var _cur_scroll = window.pageYOffset + window.innerHeight;
				_cur_scroll = _cur_scroll;
				var _max_scroll = document.documentElement.scrollHeight;
				_max_scroll = _max_scroll - 200
			}
			var _do_scroll = 0;
			if (_max_scroll <= _cur_scroll) {
				_do_scroll = 1
			}
			$_view.append(html);
			if (_do_scroll == 1) {
				if (_Android_) {
					setTimeout('to_bottom("div_view",0)', 500)
				} else {
					to_bottom('div_view', 100)
				}
			} else {
				now_received_msg[room_id] = res[0];
				if (_Android_) {
					if (document.activeElement.id != "comment") {
						$('#d_received_msg').show();
						$('#ul_received_msg').html(html)
					}
				} else {
					$('#d_received_msg').show();
					$('#ul_received_msg').html(html)
				}
			}
		} else {
			now_received_msg[room_id] = res[0];
			if (_Android_) {
				if (document.activeElement.id != "comment") {
					$('#d_received_msg').show();
					$('#ul_received_msg').html(html)
				}
			} else {
				$('#d_received_msg').show();
				$('#ul_received_msg').html(html)
			}
		}
	}
	m_hide();
	if (ini_flag == 1 || ini_flag == 2) {
		disp_page = which_page(last_seq);
		var url_page = which_page(last_seq, room_id);
		if (google_analytics) {
			if (url_page) {
				var url = "/" + room_id + "/" + url_page
			} else {
				var url = "/" + room_id + "/"
			}
			ga('send', 'pageview', url)
		}
	}
}



function change_disp_by_user_or_guest(data) {
	clear_global();
	if (data.uid) {
		uid = data.uid;
		var cmd = data.cmd;
		if (uid == "guest") {}
		$('#b_open_login').hide();
		$('#li_logout').show();
		$('#b_open_create_user').hide();
		$('#div_login').hide();
		$('#b_open_notice').show();
		$('#li_change_photo').show();
		$('#li_change_passwd').show();
		$('#create_new_user').hide();
		$('.b_show_create_room').show();
		var uid_data = {};
		uid_data[data.uid] = [data.uname, data.imgs[0], data.status];
		add_user_store(uid_data);
		socket.json.emit('get_friend_list');
		if (cmd == "login" || cmd == "create_user") {
			fsid.set(data.sid, data.keep_login)
		}
		user_photo(data.imgs, data.uname, data.character_name);
		if (data.created) {
			show_photo_dialog()
		}
	} else {
		data.uname = "ゲスト";
		uid = "guest";
		$('#b_open_login').show();
		$('#li_logout').hide();
		$('#b_open_create_user').show();
		$('#b_open_notice').hide();
		$('#li_change_photo').hide();
		$('#li_change_passwd').hide();
		$('#create_new_user').show();
		$('.b_show_create_room').hide();
		fsid.del();
		user_photo(data.imgs, data.uname, data.character_name)
	}
	get_page();
	get_list(selected_category, searched_room_name, "")
};

document.getElementById('comment').addEventListener('paste', function(event) {
	const items = event.clipboardData.items;
	for (let item of items) {
		if (item.type.indexOf('image') !== -1) {
			const blob = item.getAsFile();
			const reader = new FileReader();
			reader.onload = function(event) {
				const clipboard_img_src = event.target.result;
				const img = document.createElement('img');
				img.src = clipboard_img_src;
				img.style.maxWidth = '100px';
				img.style.maxHeight = '100px';
				img.style.position = 'absolute';
				img.style.cursor = 'pointer';

				img.onload = function() {
					const imgHeight = img.naturalHeight;
					const imgWidth = img.naturalWidth;

					let resizedImgSrc = clipboard_img_src;
					if (imgHeight > 720 || imgWidth > 720) {
						const canvas = document.createElement('canvas');
						const ctx = canvas.getContext('2d');

						const scale = Math.min(720 / imgWidth, 720 / imgHeight);
						canvas.width = imgWidth * scale;
						canvas.height = imgHeight * scale;

						ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
						resizedImgSrc = canvas.toDataURL();
					}

					const commentElement = document.getElementById('comment');
					let preview = document.getElementById('preview');
					if (!preview) {
						preview = document.createElement('div');
						preview.id = 'preview';
						preview.style.position = 'relative';
						commentElement.parentElement.style.position = 'relative';
						commentElement.parentElement.appendChild(preview);
					}
					preview.innerHTML = '';

					const previewImg = document.createElement('img');
					previewImg.src = resizedImgSrc;
					previewImg.style.maxWidth = '100px';
					previewImg.style.maxHeight = '100px';
					previewImg.style.cursor = 'pointer';

					preview.style.position = 'absolute';
					preview.style.top = '-120px';
					preview.style.right = '10px';

					preview.appendChild(previewImg);

					previewImg.addEventListener('click', function() {
						const enlarged = document.createElement('div');
						enlarged.style =
							`
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 100vh;
                            background-color: rgba(0, 0, 0, 0.8);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 1000;
                        `;
						const largeImg = document.createElement('img');
						largeImg.src = resizedImgSrc;
						largeImg.style.maxWidth = '90%';
						largeImg.style.maxHeight = '90%';
						enlarged.appendChild(largeImg);
						document.body.appendChild(enlarged);

						enlarged.addEventListener('click', function() {
							document.body.removeChild(enlarged);
						});
					});
				};
			};
			reader.readAsDataURL(blob);
		}
	}
});

document.getElementById('comment').addEventListener('keyup', function(event) {
	if (event.key === 'Backspace') {
		if (this.value === '') {
			clipboard_img_src = "";
			var preview = document.getElementById('preview');
			if (preview) {
				preview.innerHTML = '';
			}
		}
	}
});

function send() {
	clear_fnc_validator('div_msg');
	var msg = $('#comment').val();
	if (msg != "") {
		var check_msg = replaceAll(msg, " ", "");
		check_msg = replaceAll(check_msg, "　", "");
		if (check_msg == "") {
			fnc_validator('comment', 'comment_err', '空白だけの投稿はできません');
			return;
		}
		if (!validator.isLength(msg, 1, 4000)) {
			fnc_validator('comment', 'comment_err', '入力文字数が長すぎます');
			return;
		}
		msg = trim_space(msg, max_br);
		if (msg == false) {
			fnc_validator('comment', 'comment_err', '入力欄が空白です');
			return;
		}
	} else {
		if (!img_src2 && !clipboard_img_src) {
			fnc_validator('comment', 'comment_err', '入力欄が空欄です');
			return;
		}
	}

	if (!img_src2 && clipboard_img_src) {
		img_src2 = clipboard_img_src;
	}
	if (img_src2) {
		var imgStructure = img_src2.split(',');
		if (imgStructure.length == 2) {
			var str = imgStructure[0];
			str = str.replace("data:image/", "");
			str = str.replace(";base64", "");
			if (str == "jpeg" || str == "png" || str == "gif") {} else {
				alert('添付画像エラー。画像は、jpg、png、gifのみ添付してください。');
				return;
			}
		} else {
			alert('添付画像エラー。選択された画像をご確認ください');
			return;
		}
	}
	var character_name = "";
	if (gloval_character_name[selected_my_icon]) {
		character_name = gloval_character_name[selected_my_icon];
	}
	var data = {
		comment: msg,
		type: "1",
		room_id: disp_room_id,
		img: img_src2,
		img_no: selected_my_icon,
		character_name: character_name
	};
	socket.json.emit('send', data);
	send_anime(uid);
	$('#comment').val("");
	img_src2 = "";
	clipboard_img_src = "";
	$('#i_file2').val("");
	$('#uv').val("");
	$('#uv').hide();
	$('#file_span2').html("");

	var preview = document.getElementById('preview');
	if (preview) {
		preview.innerHTML = '';
	}
	if (_MY_SP_ == 1) {
		$('#comment').blur();
		$('#box2 .tabs').show();
	}
	if (google_analytics) {
		ga('send', 'event', 'button', 'click', 'msg send');
	}
	check_room_list_update();
}


const storagePrefix = 'starStatus_';
const userList = document.getElementById('user_list2');
const processedElements = new Set();
const originalPositions = new Map();

function updateStars() {
	const onlineElements = userList.querySelectorAll('.online, .online_1');
	const clearfix = userList.querySelector('.clearfix');

	onlineElements.forEach((element, index) => {
		if (processedElements.has(element)) return;

		const liElement = element.closest('li');
		const storageKey = `${storagePrefix}${index}`;
		let starStatus = localStorage.getItem(storageKey) || '☆';
		const star = document.createElement('span');
		star.textContent = starStatus;
		star.style.fontSize = '18px';
		star.style.marginRight = '5px';
		star.style.cursor = 'pointer';

		if (!originalPositions.has(liElement)) {
			originalPositions.set(liElement, liElement.nextSibling);
		}

		star.addEventListener('click', () => {
			starStatus = star.textContent === '☆' ? '★' : '☆';
			star.textContent = starStatus;
			localStorage.setItem(storageKey, starStatus);

			if (starStatus === '★' && clearfix) {
				clearfix.parentNode.insertBefore(liElement, clearfix.nextSibling);
			} else {
				const originalPosition = originalPositions.get(liElement);
				if (originalPosition) {
					userList.insertBefore(liElement, originalPosition);
				} else {
					userList.appendChild(liElement);
				}
			}
		});

		element.insertAdjacentElement('beforebegin', star);
		processedElements.add(element);

		if (starStatus === '★' && clearfix) {
			clearfix.parentNode.insertBefore(liElement, clearfix.nextSibling);
		}
	});
}

const observer = new MutationObserver((mutations) => {
	let needsUpdate = false;

	for (const mutation of mutations) {
		if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
			needsUpdate = true;
			break;
		}
	}

	if (needsUpdate) {
		updateStars();
	}
});

if (userList) {
	observer.observe(userList, {
		childList: true,
		subtree: true
	});
	updateStars();
}


const userList_1 = document.getElementById('user_list2');

function filterUsers(suN) {
	Array.from(userList_1.getElementsByClassName('li_user clearfix')).forEach(
		$user => {
			$user.style.display = $user.getElementsByClassName('user_name')[0].textContent
				.includes(suN) || suN === "" ? '' : 'none';
		});
}

function addSearchInput() {
	if (!document.getElementById('suNe')) {
		const suNe = document.createElement('input');
		suNe.type = 'text';
		suNe.id = 'suNe';
		suNe.placeholder = '検索...';
		userList_1.prepend(suNe);
		suNe.addEventListener('input', () => filterUsers(suNe.value));
	}
}

new MutationObserver(() => addSearchInput()).observe(userList_1, {
	childList: true,
	subtree: true
});
addSearchInput();



const popup = document.createElement('div');
popup.id = 'blockPopup';
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.width = '430px';
popup.style.maxHeight = '80vh';
popup.style.overflowY = 'auto';
popup.style.backgroundColor = 'rgba(255, 255, 255, 1)';
popup.style.border = '2px solid #ccc';
popup.style.borderRadius = '10px';
popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
popup.style.display = 'none';
popup.style.zIndex = '9999';
popup.style.padding = '10px';

const closeButton = document.createElement('button');
closeButton.id = 'closeButton';
closeButton.textContent = '☓';
closeButton.style.position = 'sticky';
closeButton.style.top = '0px';
closeButton.style.right = '10px';
closeButton.style.color = 'white';
closeButton.style.backgroundColor = 'red';
closeButton.style.border = 'none';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '16px';
closeButton.style.padding = '1px';
closeButton.style.height = '20px';
closeButton.style.lineHeight = '1';

const warningMessage = document.createElement('div');
warningMessage.textContent = '※ 動作中は、なるべくねとるむを動かさないでください。検索漏れが出る場合があります';
warningMessage.style.color = 'red';
warningMessage.style.fontWeight = 'bold';
warningMessage.style.fontSize = '14px';
warningMessage.style.marginBottom = '10px';

const commandDescription = document.createElement('div');
commandDescription.innerHTML =
	'コマンド（任意、複数可、未指定の場合自動で全て検索）: <br> @user[ユーザー名] - 検索するユーザーの指定 <br> @page[最初のページ数-最後のページ数] - 検索するページの指定 <br>@page[100-x] の形式で指定すると、100ページ以降の結果を取得します。<br> 例 @user[baka]あ　@page[1-100]あ　@user[baka]@page[100-x]あ <br> ';
commandDescription.style.fontSize = '12px';
commandDescription.style.marginBottom = '10px';

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = '検索する言葉を入力';
inputField.style.width = '75%';
inputField.style.padding = '5px';
inputField.style.border = '1px solid #ccc';
inputField.style.borderRadius = '5px';
inputField.style.marginBottom = '10px';

const logSearchButton = document.createElement('button');
logSearchButton.textContent = 'ログ検索';
logSearchButton.style.marginLeft = '5px';
logSearchButton.style.padding = '5px';
logSearchButton.style.height = '30px';
logSearchButton.style.backgroundColor = '#0067C0';
logSearchButton.style.color = 'white';
logSearchButton.style.border = 'none';
logSearchButton.style.borderRadius = '5px';
logSearchButton.style.cursor = 'pointer';
logSearchButton.style.fontSize = '12px';

popup.appendChild(closeButton);
popup.appendChild(warningMessage);
popup.appendChild(commandDescription);
popup.appendChild(inputField);
popup.appendChild(logSearchButton);
document.body.appendChild(popup);


let isDragging = false;
let offsetX, offsetY;

popup.addEventListener('mousedown', function(e) {
	const popupRect = popup.getBoundingClientRect();
	const edgeArea = 20;

	if (
		e.clientX >= popupRect.left &&
		e.clientX <= popupRect.right &&
		(e.clientY >= popupRect.top && e.clientY <= popupRect.top + edgeArea ||
			e.clientY >= popupRect.bottom - edgeArea && e.clientY <= popupRect.bottom)
	) {
		isDragging = true;
		offsetX = e.clientX - popupRect.left;
		offsetY = e.clientY - popupRect.top;
	}
});

document.addEventListener('mousemove', function(e) {
	if (isDragging) {
		popup.style.left = e.clientX - offsetX + 'px';
		popup.style.top = e.clientY - offsetY + 'px';
		popup.style.transform = 'none';
	}
});

document.addEventListener('mouseup', function() {
	isDragging = false;
});

closeButton.addEventListener('click', function() {
	popup.style.display = 'none';
});

let intervalId_1;
let resultsContainer = null;
let seenMessages = new Set();
let currentSearchKeywords = '';

const workerScript =
	`
    let intervalId_1;
    self.onmessage = function(event) {
        const { type, intervalDuration, data } = event.data;
        if (type === 'start') {
            let currentPage = data.currentPage;
            intervalId_1 = setInterval(() => {
                postMessage({ type: 'fetch', page: currentPage });
                currentPage++;
            }, intervalDuration);
        } else if (type === 'stop') {
            clearInterval(intervalId_1);
        }
    };
`;

const workerBlob = new Blob([workerScript], {
	type: 'application/javascript'
});
const worker = new Worker(URL.createObjectURL(workerBlob));

logSearchButton.addEventListener('click', function() {
	if (logSearchButton.textContent === 'ストップ') {
		worker.postMessage({
			type: 'stop'
		});
		logSearchButton.textContent = 'ログ検索';
		warningMessage.textContent = '※処理終了';
		warningMessage.style.color = 'green';
		warningMessage.style.fontWeight = 'bold';
		return;
	}

	logSearchButton.textContent = 'ストップ';
	warningMessage.textContent = '※処理中...（他のタブなどでもなるべく、ねとるむを動かさないでください）';
	warningMessage.style.color = 'orange';
	warningMessage.style.fontWeight = 'bold';

	const inputText = inputField.value.trim();
	if (!inputText) {
		alert('検索する言葉を入力してください。');
		return;
	}

	seenMessages.clear();
	users = [];

	const userRegex = /@user\[(.*?)\]|@user\[(.*?)\s/g;
	const pageRegex = /@page\[(\d+(-\w+)?)\]/g;
	let pageRange = null;

	let match;
	while ((match = userRegex.exec(inputText)) !== null) {
		users.push(match[1] || match[2]);
	}

	while ((match = pageRegex.exec(inputText)) !== null) {
		pageRange = match[1];
	}
	currentSearchKeywords = inputText.replace(userRegex, '').replace(pageRegex,
		'').trim();
	const firstPage = pageRange ? parseInt(pageRange.split('-')[0]) : 1;
	const lastPageRaw = pageRange ? pageRange.split('-')[1] : null;
	const lastPage = lastPageRaw === 'x' ? 'x' : (lastPageRaw !== undefined ?
		parseInt(lastPageRaw) : null);

	if (!resultsContainer) {
		resultsContainer = document.createElement('div');
		resultsContainer.style.marginTop = '10px';
		popup.appendChild(resultsContainer);
	} else {
		resultsContainer.innerHTML = '';
	}

	let currentPage = firstPage;

	const intervalDuration = 4000;

	worker.postMessage({
		type: 'start',
		intervalDuration,
		data: {
			currentPage
		}
	});

	worker.onmessage = function(e) {
		if (e.data.type === 'fetch') {
			currentPage = e.data.page;

			socket.json.emit('join', {
				'room_id': disp_room_id,
				'page': currentPage,
				'passwd': global_passwd,
				'answer': global_answer,
				'now_cmd': now_cmd
			});
		}
	};

	socket.on('got_page', function(res) {
		var ini_flag = 2;
		if (res.join_flag) {
			ini_flag = 1;
		}
		if (res.joined_room_name) {
			show_room_name(res.joined_room_name);
		}

		if (res.res2.length > 0) {
			if (lastPage === 'x') {
				currentPage++;
			} else if (lastPage && currentPage < lastPage) {
				currentPage++;
			} else if ((lastPage && currentPage >= lastPage)) {
				worker.postMessage({
					type: 'stop'
				});
				logSearchButton.textContent = 'ログ検索';
				warningMessage.textContent = '※処理終了';
			} else if (!lastPage || isNaN(lastPage)) {
				currentPage++;
			}
		} else if (res.res2.length == 0) {
			worker.postMessage({
				type: 'stop'
			});
			logSearchButton.textContent = 'ログ検索';
			warningMessage.textContent = '※処理終了';
			socket.json.emit('join', {
				'room_id': disp_room_id,
				'page': 0,
				'passwd': global_passwd,
				'answer': global_answer,
				'now_cmd': now_cmd
			});
		}

		for (let i = 0; i < res.res2.length; i++) {
			const message = res.res2[i];
			const uname = message.uname;
			const comment = message.comment;
			const seq = message.seq;

			if (seenMessages.has(seq)) {
				continue;
			}
			seenMessages.add(seq);
			if (users.length > 0 && !users.includes(uname)) {
				continue;
			}

			if (currentSearchKeywords && !comment.includes(currentSearchKeywords)) {
				continue;
			}

			const pageNum = Math.floor(seq / 100) + 1;

			if (pageRange) {
				const pageNumbers = pageRange.split('-').map(Number);
				if (pageNumbers.length === 1) {
					if (pageNum !== pageNumbers[0]) continue;
				} else if (pageNumbers[1] === 'x') {
					if (pageNum < pageNumbers[0]) continue;
				} else {
					const startPage = pageNumbers[0];
					const endPage = pageNumbers[1];
					if (pageNum < startPage || pageNum > endPage) continue;
				}
			}

			const highlightedComment = currentSearchKeywords ? comment.replace(new RegExp(
					currentSearchKeywords, 'g'),
				'<span style="background-color: yellow;">$&</span>') : comment;

			const resultHtml = document.createElement('div');
			resultHtml.style.marginBottom = '5px';
			resultHtml.style.padding = '5px';
			resultHtml.style.border = '1px solid #e0e0e0';
			resultHtml.style.borderRadius = '5px';
			resultHtml.innerHTML =
				`
                <strong>${seq} : ${uname}</strong>: ${highlightedComment}
               <span class="jumpButton" style="color: #0067C0; cursor: pointer; font-size: 11px; padding-left: 5px;">ジャンプ</span>
            `;
			resultsContainer.appendChild(resultHtml);

			const jumpButton = resultHtml.querySelector('.jumpButton');
			jumpButton.addEventListener('click', function() {
				worker.postMessage({
					type: 'stop'
				});
				logSearchButton.textContent = 'ログ検索';
				warningMessage.textContent = '※処理終了';
				socket.json.emit('join', {
					'room_id': disp_room_id,
					'page': pageNum,
					'passwd': global_passwd,
					'answer': global_answer,
					'now_cmd': now_cmd
				});
				document.getElementById('closeButton').click();
			});
		}
	});
});



function addStarMarks() {
	var roomList = document.getElementById('room_list');
	var children = roomList.children;
	var storedRoomNames = JSON.parse(localStorage.getItem('starredRoomNames')) || [];

	for (var i = 0; i < children.length; i++) {
		var s2Element = children[i].querySelector('.s2');

		if (s2Element) {
			if (!s2Element.nextElementSibling || !s2Element.nextElementSibling.classList
				.contains('star-mark')) {
				var starElement = document.createElement('span');
				starElement.classList.add('star-mark');
				starElement.style.fontSize = '24px';
				starElement.style.cursor = 'pointer';
				starElement.style.transition = 'transform 0.2s';
				starElement.style.display = 'inline-block';
				starElement.style.marginLeft = '5px';

				var roomName = now_room_list[i].room_name;

				if (i !== 0 && storedRoomNames.includes(roomName)) {
					starElement.innerHTML = '★';
				} else if (i !== 0) {
					starElement.innerHTML = '☆';
				}

				starElement.addEventListener('mousedown', function(event) {
					event.stopPropagation();
					event.preventDefault();

					var index = Array.from(roomList.children).indexOf(this.closest('li'));
					var roomData = now_room_list[index];
					var roomName = roomData.room_name;

					if (this.innerHTML === '☆') {
						this.innerHTML = '★';
						var newRoomObject = {
							"_id": roomData._id,
							"room_name": roomData.room_name,
							"category": roomData.category,
							"count": 0,
							"r_permition": roomData.r_permition,
							"room_riddle": roomData.room_riddle,
							"update_time": roomData.update_time,
							"in_user": {}
						};

						storedRoomNames.push(roomName);
						localStorage.setItem('starredRoomNames', JSON.stringify(storedRoomNames));
						localStorage.setItem(roomName, JSON.stringify(newRoomObject));

						now_room_list.splice(2, 0, newRoomObject);
						show_room_list(now_room_list, "");
						addStarMarks();
					} else {
						this.innerHTML = '☆';
						var roomIndex = storedRoomNames.indexOf(roomName);
						if (roomIndex > -1) {
							storedRoomNames.splice(roomIndex, 1);
						}
						localStorage.setItem('starredRoomNames', JSON.stringify(storedRoomNames));
						localStorage.removeItem(roomName);

						now_room_list = now_room_list.filter(function(room) {
							return room.room_name !== roomName;
						});
						show_room_list(now_room_list, "");
						addStarMarks();
					}
				});

				s2Element.parentNode.insertBefore(starElement, s2Element.nextSibling);
			}
		}
	}
}

function loadStarredRooms() {
	var storedRoomNames = JSON.parse(localStorage.getItem('starredRoomNames')) || [];
	var starredRooms = [];
	for (var roomName of storedRoomNames) {
		var roomData = JSON.parse(localStorage.getItem(roomName));
		if (roomData) {
			starredRooms.push(roomData);
		}
	}
	return starredRooms;
}

socket.on('got_room_list', function(res0) {
	var res = res0.res;
	var update_time = res0.update_time;

	var starredRooms = loadStarredRooms();

	if (starredRooms.length > 0) {
		res.splice(2, 0, ...starredRooms);
	}

	show_room_list(res, update_time);
	addStarMarks();
});


//ロード画面撤去
(function() {

		const splashScreen = document.getElementById("splash-screen");
		setTimeout(function() {
			splashScreen.style.opacity = "0";
			splashScreen.style.transition = "opacity 0.5s ease";
			setTimeout(function() {
				splashScreen.style.display = "none";
			}, 500); // 0.5秒後に非表示
		}, 1850); // 1.85秒後にフェードアウトを開始
})();
