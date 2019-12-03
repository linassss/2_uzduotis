import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const username = new MDCTextField(document.querySelector('.username'));
const email = new MDCTextField(document.querySelector('.email'));
const comments = new MDCTextField(document.querySelector('.comments'));

new MDCRipple(document.querySelector('.send'));

function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
      if(typeof pair[1]=='string'){
        s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
      }
    }
    return s;
  }


  const postComm = document.getElementById("input_form");
  postComm.addEventListener("submit", e =>{
    var xhr = new XMLHttpRequest();
    var formData = new FormData(document.querySelector("#input_form"))
    xhr.open("POST", "http://localhost:3212/feedbacks");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(urlencodeFormData(formData));
    }
  )