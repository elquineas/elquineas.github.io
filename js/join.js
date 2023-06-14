document.addEventListener("DOMContentLoaded", () => {
  const g_email = document.querySelector("#g_email");
  //   g_email.addEventListener("focus", eamilfocus);
  //   g_email.addEventListener("blur", eamilblur);
  g_email.addEventListener("keyup", eamilKeyUp);
  //   g_email.style.backgroundColor = "yellow";
});
// const eamilfocus = function () {
//   g_email.style.border = "2px solid #ff1212";
// };
// const eamilblur = function () {
//   g_email.style.border = "1px solid mediumseagreen";
// };

const eamilKeyUp = function () {
  //   const g_email = document.querySelector("#g_email");
  const emailText = g_email.value;
  if (!emailText) {
    g_email.style.border = "1px solid #ff1212";
    return false;
  } else {
    g_email.style.border = "1px solid mediumseagreen";
  }

  document.querySelector("#login_btn").addEventListener("click", join);
};
