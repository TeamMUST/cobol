"use strict"
let str = "";
let htmlstr = "";
let isNum = 0;
let i = 0;
let skipflg = 0;
let ErrCount = 0;


window.onkeydown = e=>{
  main(e.key.toUpperCase());
  e.preventDefault();
}


function init(){
  str = "****************************************************************<br>" +
        "*                                                              *<br>" +
        "****************************************************************<br>" +
        " IDENTIFICATION          DIVISION. <br>" +
        "****************************************************************<br>" +
        "  PROGRAM-ID.             SAMPLE. <br>" +
        "   ENVIRONMENT             DIVISION. <br>" +
        "  ****************************************************************<br>" +
        "   DATA                    DIVISION. <br>" +
        "  ****************************************************************<br>" +
        "   PROCEDURE               DIVISION. <br>" +
        "  ****************************************************************<br>" +
        "       DISPLAY 'HELLO WORLD'. <br>" +
        "       STOP RUN.";
  isNum = 0;
//  document.getElementById("frame").innerHTML = str;
//  str = document.getElementById("frame").textContent;
skipChar();
changeColor();
}

function main(inputKey){
  if(str.charAt(isNum)==inputKey){
    isNum++;
    if(isNum < str.length){
      changeColor();
    }else{
      document.getElementById("frame").textContent = "終了します";
    }
  } else {
    ErrCount++;
    changeColor();
  }
}

function skipChar(){
  for (i=isNum; i<str.length; i++){
    if (skipflg==0) {
      if (str.charAt(i)==">") {
        skipflg = 1;
      } else {
        continue;
      }
    } else {
      //空白チェック
      if (str.charAt(i).trim=="" || str.charAt(i)==" "){
        continue;
      } else if (str.charAt(i)=='*'){
        continue;
      } else if (str.charAt(i)=='\n'){
        continue;
      } else if (str.charAt(i)=='<'){
        skipflg = 0;
      } else {
        isNum = i;
        break;
      }
    }
  }
}

function changeColor(){
  htmlstr = "<font color='white'>" + str.substring(0,isNum) + "</font>"  + 
  "<font color='yellow'>" + str.substring(isNum,isNum+1) + "</font>" +
  str.substring(isNum+1, str.length);
  htmlstr += "<br><br><br><br><br>間違えた回数：" + ErrCount
  document.getElementById("frame").innerHTML = htmlstr;
//  str = htmlstr;
  skipChar();
}

init();