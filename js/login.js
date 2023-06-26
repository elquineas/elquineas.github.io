document.addEventListener("DOMContentLoaded", () => {
  const msg_divs = document.querySelectorAll("div.msg_div");
  document.querySelector("#kakao_login").addEventListener("click", () => {
    const input_id = document.querySelector("input#email");
    if (!input_id.value) {
      const nav_text = "* 이메일을 입력해주세요";
      msg_divs[0].style.display = "block";
      msg_divs[0].textContent = nav_text;
      msg_divs[0].style.color = "tomato";
      return false;
    }
    document.location.href = "recommend.html";
  });
  document.querySelector("#login").addEventListener("click", () => {
    const input_id = document.querySelector("input#email");
    console.log(input_id);
    if (!input_id.value) {
      const nav_text = "* 이메일을 입력해주세요";
      msg_divs[0].style.display = "block";
      msg_divs[0].textContent = nav_text;
      msg_divs[0].style.color = "tomato";
      return false;
    }
    document.location.href = "recommend.html";
  });
});
