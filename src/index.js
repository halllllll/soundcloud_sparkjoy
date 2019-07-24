import checkForm from "./checkForm";
const sc_account = document.getElementById("sc_account");
const label_alt = document.getElementById("label_alt");
const form_btn = document.getElementById("go_btn");
console.log(label_alt);
let go_btn = new checkForm(sc_account, form_btn, label_alt);
// go_btn.listenOn();

// なんかようわからんので愚直にやるやつ

/*
document.getElementById("sc_account").addEventListener("input", (e) => {
  console.log(document.getElementById("sc_account").value);   
});
*/