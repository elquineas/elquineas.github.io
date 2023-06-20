document.addEventListener("DOMContentLoaded", () => {
  const check_btn = document.querySelector("div#check_num");
  const next_btn = document.querySelector("button#next");
  const login_btn = document.querySelector("button#login");
  const msg_divs = document.querySelectorAll("div.msg_div");
  const checked_boxs = document.querySelectorAll("div.checked_box");
  const msg_boxs = document.querySelectorAll("div.msg_box");

  const check_btn_click = () => {
    const input_tel = document.querySelector("input#tel");
    if (!input_tel.value) {
      const nav_text = "* 전화번호를 입력해주세요";
      msg_divs[1].style.display = "block";
      msg_divs[1].textContent = nav_text;
      msg_divs[1].style.color = "tomato";
      return false;
    }
    const tel_check = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!tel_check.test(input_tel.value)) {
      const nav_text = "* 올바른 전화번호를 입력해주세요.";
      msg_divs[1].style.display = "block";
      msg_divs[1].textContent = nav_text;
      msg_divs[1].style.color = "tomato";
      input_tel.focus();
      return false;
    }
    const nav_text = "* 인증번호를 발송했습니다";
    msg_divs[1].style.display = "block";
    msg_divs[1].textContent = nav_text;
    msg_divs[1].style.color = "mediumseagreen";
  };
  const next_btn_click = () => {
    const input_email = document.querySelector("input#email");
    if (!input_email.value) {
      const nav_text = "* 이메일를 입력해주세요";
      msg_divs[0].style.display = "block";
      msg_divs[0].textContent = nav_text;
      msg_divs[0].style.color = "tomato";
      return false;
    }
    msg_divs[0].style.display = "none";
    const input_checkNum = document.querySelector("input#checkNum");
    if (!input_checkNum.value) {
      const nav_text = "* 인증번호를 입력해주세요";
      msg_divs[2].style.display = "block";
      msg_divs[2].textContent = nav_text;
      msg_divs[2].style.color = "tomato";
      return false;
    }
    if (input_checkNum.value !== "12345678") {
      const nav_text = "* 올바른 인증번호를 입력해주세요.";
      msg_divs[2].style.display = "block";
      msg_divs[2].textContent = nav_text;
      msg_divs[2].style.color = "tomato";
      return false;
    }

    msg_divs[2].style.display = "none";
    for (let div of checked_boxs) {
      div.style.display = "none";
    }
    for (let div of msg_boxs) {
      div.style.display = "block";
    }
    next_btn.style.display = "none";
    login_btn.style.display = "inline-block";
  };
  check_btn.addEventListener("click", check_btn_click);
  next_btn.addEventListener("click", next_btn_click);
  login_btn.addEventListener("click", () => {
    document.location.href = "login.html";
  });
});
