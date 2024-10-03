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
            const test_no_c = localStorage.getItem("test_no");
            var test_no=Number(test_no_c);
            console.log("test_noのストレージ値:" + test_no);
        } else {
            var test_no = 1;
            localStorage.setItem('test_no', "1");
            console.log("test_noの初期値設定");
        }

        let note_template = "NETROOM.oz96.comのアクセス制限制限調査報告書　AAniki\n";

        let time_i = 0;

        //note_templateのtest_noによる分割
        if (test_no == 1) {
            note_template += "　書式3 制限が二番目に重いLv3について\n　制限が二番目に重いLv3についての実験結果を以下に記す。\n\n";
            time_i = 5875;
            var test_ty = "change_room";
            console.log("1が認識されました");
        }
        if (test_no == 2) {
            note_template += "　書式2 制限が三番目に重いLv2について\n　制限が三番目に重いLv2についての実験結果を以下に記す。\n\n";
            time_i = 750;
            var test_ty = "one_msg";
            console.log("2が認識されました");
        }
        if (test_no == 3) {
            note_template += "　書式1 制限が最も軽いLv1について\n　制限が最も軽いLv1についての実験結果を以下に記す。\n\n";
            time_i = 250;
            var test_ty = "excute_ban";
            console.log("3が認識されました");
        }
        note_template += "実験方法:javascripでユーザースクリプトを組み、それぞれについて何msごとの実行が制限がかからないかを検証する。デフォルトの値からスタートし、制限が途中でかかった場合は自動的に停止し、次回は+125msごとに送信する。そして試行回数500までで制限がかからなかった場合はそれをギリギリの値とし、次の実験に移る。\n\n実験結果:\n\n";

        console.log("test_no:" + test_no);
        //活動記録残し用test_note、それぞれの全記録を残す


        if (localStorage.hasOwnProperty("test_note")) {
            var test_note = localStorage.getItem("test_note");
            if (test_note == "") {
                localStorage.setItem('test_note', note_template);
                var test_note  = note_template;

            }
        } else {
            localStorage.setItem('test_note', note_template);
            var test_note = note_template;
            console.log("temp=note");
        }


        //time_interval は何msごとに実行するか
        if (localStorage.hasOwnProperty("time_interval")) {
            var time_ii=localStorage.getItem("time_interval");
            console.log(time_ii);
            if(time_ii==""){
                localStorage.setItem('time_interval', time_i);
                            time_i=Number(time_i);
                           }else{
            time_i = localStorage.getItem("time_interval");
            time_i=Number(time_i);
            }
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
                if (int < 501) {
                    if (wait == false) {
                        socket.json.emit(test_ty, {});
                        int++
                        console.log("正常に送信されました");
                    } else {
                        stop_int = true;
                        var note_mem = "\n" + time_i + "msでの実行結果: " + int + "回目にて制限";
                        console.log(note_mem);
                        test_note += note_mem;
                        time_i += 125;
                        localStorage.setItem('test_note', test_note);
                        localStorage.setItem('time_interval', time_i);
                        console.log("正常に制限を記録しました");
                        setTimeout(() => {
                            window.location.reload();
                        }, 70000);
                    }
                } else {
                    stop_int = true;
                    var note_mem = "\n" + time_i + "msでの実行結果: " + int + "回目まで試行、制限回避";
                    console.log(note_mem);
                    test_note += note_mem;
                    saveTextFile(test_no, test_note);
                    localStorage.setItem('test_note', "");
                    localStorage.setItem('time_interval', "");
                    if (test_no == 3) {
                        localStorage.setItem('test_ended', true);
                    } else {
                        test_no++;
                        localStorage.setItem('test_no', test_no);
                    }
                    console.log("正常に成功を記録しました");
                    setTimeout(() => {
                        window.location.reload();
                    }, 70000);
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
