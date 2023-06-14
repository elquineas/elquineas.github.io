document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;

    if (nav_text === "일정") {
      document.location.href = "./calendar.html";
    } else if (nav_text === "챌린지") {
      document.location.href = "./challenge_calendar.html";
    }
  };
  nav_ul?.addEventListener("click", nav_click);
});
