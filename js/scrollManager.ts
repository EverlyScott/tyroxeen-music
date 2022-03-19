const header = document.querySelector(".header");
const moreElement = <HTMLElement>document.querySelector(".more");
const scrollBtn = <HTMLDivElement>document.getElementById("scrollBtn");
const main = <HTMLDivElement>document.querySelector(".main");

export default class ScrollManager {
  constructor() {
    document.addEventListener("scroll", (evt) => {
      const scrollPos = document.documentElement.scrollTop;
      if (scrollPos > window.innerHeight) {
        header.classList.remove("nobackground");
        header.classList.add("background");
      } else {
        header.classList.remove("background");
        header.classList.add("nobackground");
      }

      if (scrollPos >= 195 && !window.matchMedia("(max-width: 1060px)").matches) {
        main.style.backgroundPosition = "center -" + (scrollPos - 195).toString() + "px";
        scrollBtn.classList.add("hidden");
      } else if (!window.matchMedia("(max-width: 1060px)").matches) {
        main.style.backgroundPosition = "center 0";
        scrollBtn.classList.remove("hidden");
      }
    });

    scrollBtn.addEventListener("click", () => {
      document.documentElement.scrollTo({
        top: moreElement.offsetTop - 100,
        behavior: "smooth",
      });
    });
  }
}
