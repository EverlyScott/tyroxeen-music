const header = document.querySelector(".topbar");
const moreElement = <HTMLElement>document.querySelector("main");
const scrollBtn = <HTMLDivElement>document.getElementById("scrollBtn");
const main = <HTMLDivElement>document.querySelector("header");

export default class ScrollManager {
  constructor(scrollOffset: number) {
    document.addEventListener("scroll", (evt) => {
      const scrollPos = document.documentElement.scrollTop;
      if (scrollPos > window.innerHeight) {
        header.classList.remove("nobackground");
        header.classList.add("background");
      } else {
        header.classList.remove("background");
        header.classList.add("nobackground");
      }

      if (scrollPos >= scrollOffset && !window.matchMedia("(max-width: 1060px)").matches) {
        main.style.backgroundPosition = "center -" + (scrollPos - scrollOffset).toString() + "px";
        scrollBtn.classList.add("hidden");
      } else if (!window.matchMedia("(max-width: 1060px)").matches) {
        main.style.backgroundPosition = "center 0";
        scrollBtn.classList.remove("hidden");
      }
    });

    scrollBtn.addEventListener("click", () => {
      document.documentElement.scrollTo({
        top: moreElement.offsetTop + 150,
        behavior: "smooth",
      });
    });
  }
}
