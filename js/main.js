document.addEventListener("DOMContentLoaded", () => {
  const share_btn = document.querySelectorAll("span.icon");
  const background_box = document.querySelector(".backgound_shadow");
  const share_box = document.querySelectorAll(".share_box1");
  share_btn[0].addEventListener("click", () => {
    background_box.style.display = "block";
    share_box[0].style.display = "inline-block";
  });
  const share = document.querySelector("#share1");
  const cancle1 = document.querySelector("#cancle1");
  share.addEventListener("click", () => {
    background_box.style.display = "none";
    share_box[0].style.display = "none";
  });
  cancle1.addEventListener("click", () => {
    background_box.style.display = "none";
    share_box[0].style.display = "none";
  });
});
