// 變數
var addcommand = document.getElementById("addcommand")
var copy = document.getElementById("copy")
//function
function clickadd(){
    let cmd_text = document.getElementById("cmdtext");
    let target = document.getElementById("sele").value;
    let item = document.getElementById("give_name").value;
    let data = document.getElementById("give_data").value;
    let count = document.getElementById("give_number").value;
    let give_tag = document.getElementById("give_tag").value;
    let array = "[tag=" + give_tag + "]";
    if (target == "") return(alert("未填入目標選擇器"))
    if (item == "") return(alert("未填入物品名稱"))
    if (count == "") count = "1";
    if (data == "") data = "0";
    if(give_tag.value = ""){
        cmd_text.value = "/give" + " " + target + " " +item + " " + count + " " + data;
        console.log(cmd_text)
    }
    else {
        let array = "[tag=" + give_tag + "]";
        cmd_text.value = "/give" + " " + target + "" + array + " " +item + " " + count + " " + data;
        console.log(cmd_text)
    }
}
function sele_change(){
    var sele = document.getElementById("sele")
    var sele_mode = sele.value
}
function copy(){
    node = document.getElementById(id);
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("指令複製成功!");
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert("指令複製成功");
    } else {
        alert('無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}
