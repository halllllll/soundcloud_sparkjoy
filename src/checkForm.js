export default class checkForm{
  constructor(account_form, form_btn, label_alt) {
    this.account_form = account_form;
    this.form_btn = form_btn;
    this.label_alt = label_alt;


    this.account_form.addEventListener("input", (e) => {
      // アンチパターン踏み抜き
      const self = this;
      this.listenOn(self, e);
    });

  }
  listenOn(self, e) { 
    this.account_name = self.account_form.value.trim();
    if (this.isInvalidname(this.account_name)) {
      self.form_btn.setAttribute("disabled", true);
      if (this.account_name == "") self.label_alt.textContent = "";
      else self.label_alt.textContent = "invalid name";
    } else {
      self.form_btn.setAttribute("enabled", true);
      console.log(self.label_alt);
      self.label_alt.textContent = "";
    }
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