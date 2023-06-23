document.addEventListener("DOMContentLoaded", () => {
  const save = () => {
    const login_form = document.querySelector("form#login_form");
    // id 나 class 가 부착되지 않은 input tag 를 select 하는 방법
    const username = login_form.querySelector("input[name='username']");
    const password = login_form.querySelector("input[name='password']");
    if (!username.value) {
      alert("이름 입력해라");
      username.focus();
      return false;
    }
    if (!password.value) {
      alert("비번 입력해라");
      password.focus();
      return false;
    }

    login_form.submit();
  }; //end login 함수

  document.querySelector("#savebtn").addEventListener("click", save);
});
