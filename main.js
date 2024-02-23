const article = document.querySelector("article");
const scrollButton = document.querySelector("button.scroll-button");
const scrollButtonIcon = scrollButton.querySelector("i");

let isPageUp = true;

article.addEventListener("scroll", (e) => {
  isPageUp = e.target.scrollTop < 350;
  scrollButtonIcon.style.transform = !isPageUp
    ? "rotate(180deg)"
    : "rotate(0deg)";
});

scrollButton.addEventListener("click", () => {
  if (isPageUp) {
    article.scrollTop = 7000;
  } else {
    article.scrollTop = 0;
  }
});
