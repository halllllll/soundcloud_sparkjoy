import jQuery from "jquery";

export default class checkForm{
  constructor(account_form, form_btn, label_alt, myform) {
    this.account_form = account_form;
    this.form_btn = form_btn;
    this.label_alt = label_alt;
    this.myform = myform;

    this.account_form.addEventListener("input", (e) => {
      // アンチパターン踏み抜きですかね
      const self = this;
      this.listenOn(self, e);
    });

    this.myform.addEventListener("keypress", (e) => {
      const self = this;
      this.preventSubmit(self, e);
    });

    this.form_btn.addEventListener("click", (e) => {
      const self = this;
      
    });
  }

  preventSubmit(self, e) {
    if (e.which == 13) {
      console.log("やろうね");
      e.preventDefault();
      e.stopPropagation();
      if (self.form_btn.getAttribute("disabled") === null) {
        // // self.form_btn.click();
        // console.log("post処理しようね");
        // fetch("/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/ x-www-form-urlencoded; charset=UTF-8" },
        //   body: JSON.stringify({ "name": self.account_name, "age": 10 })
        // }).then((res) => {
        //   console.log("post complete!");
        // });
        // なんかうまいくいかんよ ajaxする
        let fd = new FormData();
        console.log("これをpostします", self.account_name);
        // fd.append(name, self.account_name);
        jQuery.ajax({
          url: "/",
          type: "POST",
          // data: fd,
          data: JSON.stringify({name: self.account_name}),
          dataType: "json",
          mode: 'multiple',
          processData: false,
          contentType: "application/json; charset=UTF-8",
          timeout: 1000,
          beforeSend: function (xhr) {
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(textStatus);
            console.log(errorThrown.message);
          }
        }).done((res) => {
          console.log("どうでしょうか");
          console.log(res);
          if (res.status === "success" && res.name) {
            self.label_alt.textContent = res.name;
          }
        });
      } else {
        console.log("submitできないよ");
      }
      return;
    }    
  }

  listenOn(self, e) { 
    this.account_name = self.account_form.value.trim();
    if (this.isInvalidname(this.account_name)) {
      self.form_btn.setAttribute("disabled", true);
      self.label_alt.textContent = "invalid name.";
      if (this.account_name === "") self.label_alt.textContent = " ";
      return;
    }
    self.form_btn.removeAttribute("disabled");
    self.label_alt.textContent = " ";
  }


  isInvalidname(name) {
    if (!name) {
      return true;
    }
    // 文中に空白なし 英数字とハイフン,アンダースコアのみ
    var pattern = /^[-_a-z0-9]+$/g;

    var blanky = name.indexOf(" ") >= 1;
    var regexresult = name.match(pattern);
    if (regexresult == null || blanky) {
      return true;
    } else {
      return false;
    }
  }
}