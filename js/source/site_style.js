// ==UserScript==
// @name        ねとるむ見た目
// @namespace    http://tampermonkey.net/
// @version      none
// @author       baka
// @match        https://netroom.oz96.com/*
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

//警告表示
console.log("%cSTOP！", "font-size: 65px; font-weight: bold; color: red; text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);");
console.log("%cこれは開発者向けのブラウザー機能です。", "font-size: 24px; font-weight: bold;");
console.log("%c誰かにここに何かをコピー・貼り付けするように言われた場合、それは第三者があなたのNETROOMアカウントへのアクセスを得るための詐欺・不正行為です。", "font-size: 18px;");
console.log("%c安全だと言われても%c絶対に貼り付け、実行をしないでください。", "font-size: 18px;", "color: red; font-weight: bold; font-size: 23px;");
console.log("%c詳細は https://www.weblio.jp/content/セルフXSS をご覧ください。", "font-size: 16px; font-style: italic;");

//css変更帯

const css=` body,
html {
    background-color: #1f1f1f !important;
    color: #ffffff !important;
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
    color: #7777cc !important;
}

.clearfix {
    color: #ffffff !important;
}

.btn:not(#b_open_notice > span),
.on {
    background-color: #999999 !important;
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
    border-color: #ffffff !important;
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
    color: #ffffff !important;
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
.s4_wrap,
.purple-class {
    background-color: #1f1f1f !important;
    color: #ffffff !important;
}

.purple-class {
    color: #ffffff !important;
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

`;
const style=document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

$('body').css('background-image', 'url("https://yinkya.github.io/ip/IMG_0379.jpeg")');


unsafeWindow.show_room_name = function(res){
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
	$('#room_title').html('<marquee style="display:inline-block; width: 100%;" scrollamount="6">' + res.room_name + '</marquee>');
	$('#room_title').css({
	    'width': '90%',
	    'box-sizing': 'border-box'
	});


	if (_MY_SP_ == '1') {
		$('#room_title2').html('<marquee><h1 id="room_title">' + res.room_name + '</h1></marquee>')
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

unsafeWindow.set_url_mode=function(room_id, page, title, cmd) {
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
	if (typeof (last_msg_seq[room_id]) != 'undefined') {
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

	intervalId = setInterval(function () {
		scrollTitle = scrollTitle.substring(1) + scrollTitle.substring(0, 1);
		document.title = scrollTitle;
	}, 800);
}


var clock = document.createElement('div');
clock.id = 'clock';
clock.style.display = 'inline';
clock.style.color = 'white';
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
