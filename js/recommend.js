const DIV_INDEX = {
  WATER: 0,
  ZERO: 1,
  BOOK: 2,
  DAIRY: 3,
  BEDDING: 4,
  RUNNING: 5,
};

document.addEventListener("DOMContentLoaded", () => {
  const challenge = () => {
    const challenge_item = document.querySelectorAll("#challenge_box div");
    const challenge_click = (event) => {
      const target = event.target;
      const div_text = target.innerText;
    };
  };
  challenge_item?.addEventListener("click", challenge_click);
});
