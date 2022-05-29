//生成
function click_start(){
    var cmd_text = document.getElementById("cmd_text");
    var input_tag = document.getElementById("kill_tag").value;
    var target = document.getElementById("input_target").value;
    if (input_tag != ""){
        cmd_text.innerHTML = "/kill" + " " + target + "[tag=" + input_tag + "]";
        console.log(cmd_text)
    }
    else {
        cmd_text.innerHTML = "/kill" + " " + target;
        console.log(cmd_text)
    }
}