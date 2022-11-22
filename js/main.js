const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
    direction === "next"
        ? (translate -= translateAmount)
        : (translate += translateAmount);

    pages.forEach(
        (pages) => (pages.style.transform = `translateX(${translate}%)`)
    );
};

// //membership tab btn
const tabItem = document.querySelectorAll(".tab-container__item");
const tabContent = document.querySelectorAll(".content-container__content");

tabItem.forEach((item) => {
  item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  tabItem.forEach((title) => {
    title.classList.remove("active");
  });
  tabContent.forEach((target) => {
    target.classList.remove("target");
  });
  document.querySelector("#" + target).classList.add("target");
  tabTarget.classList.add("active");
}
