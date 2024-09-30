// ==UserScript==
// @name         NETROOM制限調査ツール
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


        //time_interval はどのテストを実行するか
        if (localStorage.hasOwnProperty("test_no")) {
            var test_no = localStorage.getItem("test_no");
        } else {
            var test_no = 1;
            localStorage.setItem('test_no', "1");
        }

        var note_template = "NETROOM.oz96.comのアクセス制限制限調査報告書　AAniki\n";

        //note_templateのtest_noによる分割
        if (test_no = 1) {
            note_template += "　書式3 制限が二番目に重いLv3について\n　制限が二番目に重いLv3についての実験結果を以下に記す。\n\n";
            var time_i = 1000;
            var test_ty = "change_room";
        }
        if (test_no = 2) {
            note_template += "　書式2 制限が三番目に重いLv2について\n　制限が三番目に重いLv2についての実験結果を以下に記す。\n\n";
            var time_i = 750;
            var test_ty = "one_msg";
        }
        if (test_no = 3) {
            note_template += "　書式1 制限が最も軽いLv1について\n　制限が最も軽いLv1についての実験結果を以下に記す。\n\n";
            var time_i = 250;
            var test_ty = "excute_ban";
        }
        note_template += "実験方法:javascripでユーザースクリプトを組み、それぞれについて何msごとの実行が制限がかからないかを検証する。デフォルトの値からスタートし、制限が途中でかかった場合は自動的に停止し、次回は+5msごとに送信する。そして試行回数750までで制限がかからなかった場合はそれをギリギリの値とし、次の実験に移る。\n\n実験結果:\n\n";

        console.log("test_no:" + test_no);
        //活動記録残し用test_note、それぞれの全記録を残す

        if (localStorage.hasOwnProperty("test_note")) {
            var test_note = localStorage.getItem("test_note");
            if (test_note == "") {
                localStorage.setItem('test_note', note_template);
            }
        } else {
            localStorage.setItem('test_note', note_template);
            var test_note = note_template;
        }

        //time_interval は何msごとに実行するか
        if (localStorage.hasOwnProperty("time_interval")) {
            var time_i = localStorage.getItem("time_interval");
        } else {
            localStorage.setItem('time_interval', time_i);
        }
        console.log("time_i:" + time_i);
        var wait = false;
        socket.on('notice', function (res) {
            l('【notice】');
            show_notice(res)
            if (res.msg == "しばらくお待ちください") {
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
                        console.log("正常に送信されました");
                    } else {
                        stop_int = true;
                        var note_mem = "\n" + time_i + "msでの実行結果: " + int + "回目にて制限";
                        console.log(note_mem);
                        test_note += note_mem;
                        time_i += 5;
                        localStorage.setItem('test_note', test_note);
                        localStorage.setItem('time_interval', time_i);
                        console.log("正常に制限を記録しました");
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                } else {
                    stop_int = true;
                    var note_mem = "\n" + time_i + "msでの実行結果: " + int + "回目まで試行、制限回避";
                    console.log(note_mem);
                    test_note += note_mem;
                    if (test_no = 3) {
                        localStorage.setItem('test_ended', true);
                    } else {
                        test_no++;
                    }
                    saveTextFile(test_no, test_note);
                    localStorage.setItem('test_note', "");
                    console.log("正常に成功を記録しました");
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }
        }

        function test_2() {
            setInterval(test_func, time_i);
            console.log("test_2実行");
        }
        setTimeout(test_2, 70000);
        console.log("70秒待機中");

    }
})();