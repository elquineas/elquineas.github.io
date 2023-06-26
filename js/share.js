document.addEventListener("DOMContentLoaded", () => {
  //   $("#headers").load("common/header.html"); //헤더 인클루드
  //   document.getElementById("header").innerHTML =
  //     '<object type="text/html" data="sidebar.html"></object>';
  // function includeHTML() {
  //   let z, elmnt, file, xhttp;

  //   z = document.getElementsByTagName("*");

  //   for (let i = 0; i < z.length; i++) {
  //     elmnt = z[i];
  //     file = elmnt.getAttribute("data-include");

  //     if (file) {
  //       xhttp = new XMLHttpRequest();
  //       xhttp.onreadystatechange = function () {
  //         if (this.readyState == 4) {
  //           if (this.status == 200) {
  //             elmnt.innerHTML = this.responseText;
  //           }
  //           if (this.status == 404) {
  //             elmnt.innerHTML = "Page not found.";
  //           }
  //           /* Remove the attribute, and call this function once more: */
  //           elmnt.removeAttribute("data-include");
  //           includeHTML();
  //         } //if
  //       }; //onreadystatechange

  //       xhttp.open("GET", file, true);
  //       xhttp.send();
  //       return;
  //     } //if - file
  //   } //for
  // } //includeHTML

  // /* ✨ 실행 */
  // window.addEventListener("DOMContentLoaded", () => {
  //   includeHTML();
  // });
  const share_btn = document.querySelector(".search_btn");
  const share_box = document.querySelectorAll(".share_box");
  const share_text = document.querySelector("#search_input");
  share_btn.addEventListener("click", () => {
    if (share_text.value === "물마시기") {
      share_box[0].style.display = "inline-block";
      share_box[1].style.display = "none";
      share_box[2].style.display = "none";
      return false;
    }
    if (share_text.value === "무지출") {
      share_box[1].style.display = "inline-block";
      share_box[0].style.display = "none";
      share_box[2].style.display = "none";
      return false;
    }
    if (share_text.value === "독서") {
      share_box[2].style.display = "inline-block";
      share_box[0].style.display = "none";
      share_box[1].style.display = "none";
      return false;
    }
    if (!share_text.value) {
      share_box[0].style.display = "inline-block";
      share_box[1].style.display = "inline-block";
      share_box[2].style.display = "inline-block";
      return false;
    }
  });
});
