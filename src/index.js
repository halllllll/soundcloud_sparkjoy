import checkForm from "./checkForm";
const sc_account = document.getElementById("sc_account");
const label_alt = document.getElementById("label_alt");
const form_btn = document.getElementById("go_btn");
const myform = document.getElementById("myForm");


let go_btn = new checkForm(sc_account, form_btn, label_alt, myForm);
