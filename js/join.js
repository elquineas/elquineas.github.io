const INPUT_INDEX = {
  EMAIL: 0,
  PASSWORD: 1,
  RE_PASSWORD: 2,
  TEL: 3,
  BIRTH: 4,
};

document.addEventListener("DOMContentLoaded", () => {
  const msg_divs = document.querySelectorAll("div.msg_div");

  msg_divs[0].append("<button>TEST</button>");
  const join = () => {
    const join_inputs = document.querySelectorAll(".contain input");
    const input_email = join_inputs[INPUT_INDEX.EMAIL].value;
    if (!input_email) {
      const nav_text = "* 이메일을 입력해주세요";
      msg_divs[INPUT_INDEX.EMAIL].style.display = "block";
      msg_divs[INPUT_INDEX.EMAIL].textContent = nav_text;
      msg_divs[INPUT_INDEX.EMAIL].style.color = "tomato";
      return false;
    }
    const email_check =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email_check.test(input_email)) {
      const nav_text = "* 이메일 형식을 맞춰서 입력해주세요";
      msg_divs[INPUT_INDEX.EMAIL].style.display = "block";
      msg_divs[INPUT_INDEX.EMAIL].textContent = nav_text;
      msg_divs[INPUT_INDEX.EMAIL].style.color = "tomato";
      return false;
    }

    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("Password is required.");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    const password_check =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!password_check.test(input_password)) {
      alert(
        "Password must be 8 to 15 digits including \nspecial characters, uppercase and lowercase letters, and numbers."
      );
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    const input_re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!input_re_password) {
      alert("Password Check is required.");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
    if (input_password !== input_re_password) {
      alert("Passwords do not match.");
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }

    const input_tel = join_inputs[INPUT_INDEX.TEL].value;
    if (!input_tel) {
      alert("Phone is required.");
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
    const tel_check = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!tel_check.test(input_tel)) {
      alert(
        "The phone number format is incorrect.\nex) 000-000-0000, 000-0000-0000"
      );
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
  };
  document.querySelector("#login_btn").addEventListener("click", join);
});

const check_data = function () {
  const emailText = g_email.value;

  if (!emailText) {
    g_email.style.border = "1px solid #ff1212";
    return false;
  } else {
    g_email.style.border = "1px solid mediumseagreen";
  }

  // document.querySelector("#login_btn").addEventListener("click", join);
};
