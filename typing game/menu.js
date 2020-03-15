"use strict"
const CtrlKeyCode = 17;

window.onkeydown = e=>{
  main(e.keyCode);

}

function init(){
  window.location.href="menu.html";
}

function main(inputKey){
  if (CtrlKeyCode==inputKey) {
    switch(document.getElementById("in").value){
      case(null):
        document.getElementById("msg").innerText = "Menuが選択されていません。";
        break;
      case("1"):
        window.self.location.href="type.html";
        break;
      case("2"):
      case("3"):
      case("4"):
        document.getElementById("msg").innerText = "実装されていないMenuです。";
        break;
    }
  }
}

init();