var header = document.querySelector('.header');
var moreElement = document.querySelector('.more');
var scrollBtn = document.getElementById('scrollBtn');
var main = document.querySelector('.main');
var ScrollManager = /** @class */ (function () {
    function ScrollManager() {
        document.addEventListener('scroll', function (evt) {
            var scrollPos = document.documentElement.scrollTop;
            if (scrollPos > window.innerHeight) {
                header.classList.remove('nobackground');
                header.classList.add('background');
            }
            else {
                header.classList.remove('background');
                header.classList.add('nobackground');
            }
            if (scrollPos >= 305 && !window.matchMedia('(max-width: 1060px)').matches) {
                main.style.backgroundPosition = 'center -' + (scrollPos - 305).toString() + 'px';
                scrollBtn.classList.add('hidden');
            }
            else if (!window.matchMedia('(max-width: 1060px)').matches) {
                main.style.backgroundPosition = 'center 0';
                scrollBtn.classList.remove('hidden');
            }
        });
        scrollBtn.addEventListener('click', function () {
            document.documentElement.scrollTo({
                top: moreElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    }
    return ScrollManager;
}());
export default ScrollManager;
//# sourceMappingURL=scrollManager.js.map