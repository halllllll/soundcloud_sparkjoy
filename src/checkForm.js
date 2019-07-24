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
  }

  preventSubmit(self, e) {
    if (e.which == 13) {
      e.preventDefault();
      if (self.form_btn.getAttribute("disabled") === null) {
        // self.form_btn.click();
      } else {

      }
    }    
  }

  listenOn(self, e) { 
    this.account_name = self.account_form.value.trim();
    if (this.isInvalidname(this.account_name)) {
      self.form_btn.setAttribute("disabled", true);
      self.label_alt.textContent = "invalid name.";
      if (this.account_name == "") self.label_alt.textContent = "";
      return;
    }
    self.form_btn.removeAttribute("disabled");
    self.label_alt.textContent = "";
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