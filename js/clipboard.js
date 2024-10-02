//ねとるむクリップボード
unsafeWindow.change_disp_by_user_or_guest = function (data) {
    clear_global();
    if (data.uid) {
        uid = data.uid;
        var cmd = data.cmd;
        if (uid == "guest") { }
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

document.getElementById('comment').addEventListener('paste', function (event) {
    const items = event.clipboardData.items;
    for (let item of items) {
        if (item.type.indexOf('image') !== -1) {
            const blob = item.getAsFile();
            const reader = new FileReader();
            reader.onload = function (event) {
                const clipboard_img_src = event.target.result;
                unsafeWindow.clipboard_img_src = clipboard_img_src;

                const img = document.createElement('img');
                img.src = clipboard_img_src;
                img.style.maxWidth = '100px';
                img.style.maxHeight = '100px';
                img.style.position = 'absolute';
                img.style.cursor = 'pointer';

                img.onload = function () {
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

                    previewImg.addEventListener('click', function () {
                        const enlarged = document.createElement('div');
                        enlarged.style = `
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

                        enlarged.addEventListener('click', function () {
                            document.body.removeChild(enlarged);
                        });
                    });
                };
            };
            reader.readAsDataURL(blob);
        }
    }
});

document.getElementById('comment').addEventListener('keyup', function (event) {
    if (event.key === 'Backspace') {
        if (this.value === '') {
            unsafeWindow.clipboard_img_src = "";
            var preview = document.getElementById('preview');
            if (preview) {
                preview.innerHTML = '';
            }
        }
    }
});

unsafeWindow.send = function () {
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
        if (!img_src2 && !unsafeWindow.clipboard_img_src) {
            fnc_validator('comment', 'comment_err', '入力欄が空欄です');
            return;
        }
    }

    if (!img_src2 && unsafeWindow.clipboard_img_src) {
        img_src2 = unsafeWindow.clipboard_img_src;
    }
    if (img_src2) {
        var imgStructure = img_src2.split(',');
        if (imgStructure.length == 2) {
            var str = imgStructure[0];
            str = str.replace("data:image/", "");
            str = str.replace(";base64", "");
            if (str == "jpeg" || str == "png" || str == "gif") { } else {
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
    unsafeWindow.clipboard_img_src = "";
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
