// ==UserScript==
// @name         NETROOM���������c�[��
// @namespace    http://tampermonkey.net/
// @version      2024-09-30
// @author       AAniki
// @match        https://netroom.oz96.com/*
// ==/UserScript==

(function () {
    if (localStorage.hasOwnProperty("test_ended")) { } else {

        function saveTextFile(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
                encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }


        //time_interval �͂ǂ̃e�X�g�����s���邩
        if (localStorage.hasOwnProperty("test_no")) {
            var test_no = localStorage.getItem("test_no");
        } else {
            var test_no = 1;
            localStorage.setItem('test_no', "1");
        }

        var note_template = "NETROOM.oz96.com�̃A�N�Z�X�������������񍐏��@AAniki\n";

        //note_template��test_no�ɂ�镪��
        if (test_no = 1) {
            note_template += "�@����3 ��������Ԗڂɏd��Lv3�ɂ���\n�@��������Ԗڂɏd��Lv3�ɂ��Ă̎������ʂ��ȉ��ɋL���B\n\n";
            var time_i = 1000;
            var test_ty = "change_room";
        }
        if (test_no = 2) {
            note_template += "�@����2 �������O�Ԗڂɏd��Lv2�ɂ���\n�@�������O�Ԗڂɏd��Lv2�ɂ��Ă̎������ʂ��ȉ��ɋL���B\n\n";
            var time_i = 750;
            var test_ty = "one_msg";
        }
        if (test_no = 3) {
            note_template += "�@����1 �������ł��y��Lv1�ɂ���\n�@�������ł��y��Lv1�ɂ��Ă̎������ʂ��ȉ��ɋL���B\n\n";
            var time_i = 250;
            var test_ty = "excute_ban";
        }
        note_template += "�������@:javascrip�Ń��[�U�[�X�N���v�g��g�݁A���ꂼ��ɂ��ĉ�ms���Ƃ̎��s��������������Ȃ��������؂���B�f�t�H���g�̒l����X�^�[�g���A�������r���ł��������ꍇ�͎����I�ɒ�~���A�����+5ms���Ƃɑ��M����B�����Ď��s��750�܂łŐ�����������Ȃ������ꍇ�͂�����M���M���̒l�Ƃ��A���̎����Ɉڂ�B\n\n��������:\n\n";

        console.log("test_no:" + test_no);
        //�����L�^�c���ptest_note�A���ꂼ��̑S�L�^���c��

        if (localStorage.hasOwnProperty("test_note")) {
            var test_note = localStorage.getItem("test_note");
            if (test_note == "") {
                localStorage.setItem('test_note', note_template);
            }
        } else {
            localStorage.setItem('test_note', note_template);
            var test_note = note_template;
        }

        //time_interval �͉�ms���ƂɎ��s���邩
        if (localStorage.hasOwnProperty("time_interval")) {
            var time_i = localStorage.getItem("time_interval");
        } else {
            localStorage.setItem('time_interval', time_i);
        }
        console.log("time_i:" + time_i);
        var wait = false;
        socket.on('notice', function (res) {
            l('�ynotice�z');
            show_notice(res)
            if (res.msg == "���΂炭���҂���������") {
                wait = true;
                console.log(res);
            }
        });
        var stop_int = false;
        var int = 0;
        function test_func() {
            if (stop_int == false) {
                if (int < 751) {
                    if (wait == false) {
                        socket.json.emit(test_ty, {});
                        int++
                        console.log("����ɑ��M����܂���");
                    } else {
                        stop_int = true;
                        var note_mem = "\n" + time_i + "ms�ł̎��s����: " + int + "��ڂɂĐ���";
                        console.log(note_mem);
                        test_note += note_mem;
                        time_i += 5;
                        localStorage.setItem('test_note', test_note);
                        localStorage.setItem('time_interval', time_i);
                        console.log("����ɐ������L�^���܂���");
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                } else {
                    stop_int = true;
                    var note_mem = "\n" + time_i + "ms�ł̎��s����: " + int + "��ڂ܂Ŏ��s�A�������";
                    console.log(note_mem);
                    test_note += note_mem;
                    if (test_no = 3) {
                        localStorage.setItem('test_ended', true);
                    } else {
                        test_no++;
                    }
                    saveTextFile(test_no, test_note);
                    localStorage.setItem('test_note', "");
                    console.log("����ɐ������L�^���܂���");
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }
        }

        function test_2() {
            setInterval(test_func, time_i);
            console.log("test_2���s");
        }
        setTimeout(test_2, 70000);
        console.log("70�b�ҋ@��");

    }
})();