/*
*
*
*▼SCRIPT OF IMPORT FUNCTION
*/

const newHTML = `
<div class="h clearfix ipop_title" id="ipop_title_1">
	<b>スタンプ</b>
	<div class="d_close">
		<span id="close_stamp_1" class="close">　×　</span>
	</div>
</div>

	<div style="margin: 0px !important;">
		<input type="file" id="i_file3" accept=".txt,.stp" style="display:none">
		<button id="fileSelect" type="button" style="height:11px !important;">スタンプをインポート</button>
		<a href="https://tanabesan.github.io/netroom_extension/help/stamp" target="_blank">ℹ️</a>
		<br>
		<p style="display:none; color:#ff4444;" id="err_stamp_u">×ファイルが不正です！！</p>
	</div>
	<div class="dialog_contents" id="stamps">
    </div>
`;
const parentElement = document.getElementById('body');
let newElement = document.createElement('div');
newElement.innerHTML = newHTML;
newElement.id = 'CONT';
newElement.classList.add('dialog');
newElement.classList.add('left');
newElement.style = 'display: block; top: 215px; left: 706.391px;  min-height:400px';
parentElement.appendChild(newElement);
const closeButton_1 = document.getElementById('close_stamp_1');
let ipop_test = document.getElementById('CONT');
let isDragging_1 = false;
let offsetX_1, offsetY_1;
ipop_test.addEventListener('mousedown', (e) => {
  const ipop_testRect = ipop_test.getBoundingClientRect();
  const edgeArea = 20;
  if (
    e.clientX >= ipop_testRect.left &&
    e.clientX <= ipop_testRect.right &&
    (e.clientY >= ipop_testRect.top && e.clientY <= ipop_testRect.top + edgeArea ||
      e.clientY >= ipop_testRect.bottom - edgeArea && e.clientY <= ipop_testRect.bottom)
  ) {
    isDragging_1 = true;
    offsetX_1 = e.clientX - ipop_testRect.left;
    offsetY_1 = e.clientY - ipop_testRect.top;
  }
});
document.addEventListener('mousemove', (e) => {
  if (isDragging_1) {
    ipop_test.style.left = (e.clientX - offsetX_1) + 'px';
    ipop_test.style.top = (e.clientY - offsetY_1) + 'px';
  }
});
document.addEventListener('mouseup', () => {
  isDragging_1 = false;
});
closeButton_1.addEventListener('click', () => {
  ipop_test.style.display = 'none';
});
ipop_test.style.display = 'none';
$('#err_stamp_u').hide();

const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("i_file3");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
}, false);


function view_at_join_room(w_permition) {
    $('div.permition_dialog').hide();
    if ((w_permition - 0) == 1) {
        $('div.non_uid').hide();
        $('#no_w_permition').hide();
        $('#comment').removeAttr("disabled");
        $('#b_send').removeAttr("disabled");
        $('#i_file2').show();
        $('#comment').attr("placeholder", 'この部屋は作成者のフレンドのみ書き込みができます');
    } else {
        $('div.non_uid').hide();
        $('#no_w_permition').hide();
        $('#comment').attr("placeholder", '出会い目的、個人情報の書き込みは禁止です');
        $('#comment').removeAttr("disabled");
        $('#b_send').removeAttr("disabled");
        $('#i_file2').show();
        $('.photoicon').show();
        $('.comment_err').html("")
    }
}

const i_shu = /^==N-E_setting_script==\\n@-version:.*\\n@-type:.*\\n@-time:.*\\n@-key:.*\\n@-user:.*\\n==N-E_setting_script==\\n(\\n.*)+$/igm;
document.querySelector('#i_file3').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) {
        $('#i_file3').val("");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {

        $.get(e.target.result, (data) => {
          let text = data;
            text = text.replace(/\r?\n/g, '\\n');
            if (text.match(i_shu)){
                $('#err_stamp_u').hide();
                let j_sons = pickup_json(text);
                let j_sons_con = pickup_conf(text);
                console.log(j_sons);
                
                try {
                    let j_sons_1 = JSON.parse(j_sons);
                    import_conf(j_sons_1,j_sons_con,text);

                } catch (e) {
                    $('#err_stamp_u').html("×jsonが不正です！！<a href='https://tanabesan.github.io/netroom_extension/help/stamp/err_1' target='_blank'>ℹ️</a>");
                    $('#err_stamp_u').show();
                    console.error(e);
                }
                return true
            } else {
                $('#err_stamp_u').html("×ファイルが不正です！！<a href='https://tanabesan.github.io/netroom_extension/help/stamp/err_2' target='_blank'>ℹ️</a>");
                $('#err_stamp_u').show();
            }
        });
    };
    reader.readAsDataURL(file);
    $('#i_file3').val("");
});


function pickup_json(text) {
    const regex = /==N-E_setting_script==.+?==N-E_setting_script==/g;
    text = text.replace(regex, '');
    text = text.replace(/\\n/g, '');
    return text
}

function pickup_conf(text) {
    const regex = /==N-E_setting_script==\\n(\\n.*)+$/g;
    const regex_2 = /==N-E_setting_script==/g;
    text = text.replace(regex, '');
    text = text.replace(regex_2, '');
    text = text.replace(/\\n/g, '');
    return text
}

function import_conf(j_son, j_con, code) {
    //config抽出
    let version_s = j_con.replace(/^@-version:/g, '');
    version_s = version_s.replace(/@-type:.*@-time:.*@-key:.*@-user:.*$/, '');
    let type_s = j_con.replace(/^@-version:.*@-type:/g, '');
    type_s = type_s.replace(/@-time:.*@-key:.*@-user:.*$/, '');
    let time_s = j_con.replace(/^@-version:.*@-type:.*@-time:/g, '');
    time_s = time_s.replace(/@-key:.*@-user:.*$/, '');
    let key_s = j_con.replace(/^@-version:.*@-type:.*@-time:.*@-key:/g, '');
    key_s = key_s.replace(/@-user:.*$/g, '');
    let user_s = j_con.replace(/^@-version:.*@-type:.*@-time:.*@-key:.*@-user:/g, '');

    let c_t = code_b(key_s, code);


    if (c_t == true) {
        //中身抽出
        if (j_son.stamp) {
            let stamp_s = j_son.stamp;
            //stampインポート
            if (localStorage.hasOwnProperty("stamp") || stamp_s == !"") {
                let stamp_old = JSON.parse(localStorage.getItem("stamp"));
                for (let i = 0; i < stamp_s.length; i++) {
                    let same_s = false;
                    for (let j = 0; j < stamp_old.length; j++) {
                        if (stamp_s[i] == stamp_old[j]) {
                            same_s = true;
                        }
                    }
                    if (same_s == false) {
                        stamp_old.push(stamp_s[i]);
                    }
                }
                localStorage.setItem('stamp', JSON.stringify(stamp_old));
                ipop_test.style.display = 'none';
                show_notice({
                    'msg': 'スタンプを正しくインポートしました。'
                });
            } else {
                localStorage.setItem('stamp', JSON.stringify(stamp_s));
                ipop_test.style.display = 'none';
                show_notice({
                    'msg': 'スタンプを正しくインポートしました。'
                });
            }
        }
        if (j_son.config) {
            let config_s = j_son.config;
        }
        if (j_son.ui) {
            let ui_s = j_son.ui;
        }
    }


}


//key解読用仮関数
function code_b(key,code) {
    return true
}

//表示する関数

function show_stamp_frame() {
    let html = "";
    let j_son_3 = "";
    if (localStorage.hasOwnProperty("stamp")){
        j_son_3 = JSON.parse(localStorage.getItem("stamp"));
    }

for(i=0;i<j_son_3.length;i++;){
//追加動作
}
    //やりなげ()
    $('#stamps').html("");
    ipop_test.style.display = 'block';

}

/*
*▲SCRIPT OF IMPORT FUNCTION
*
*▼SCRIPT OF ENTER FUNCTION
*/

