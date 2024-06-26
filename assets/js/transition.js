const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabUI = $$(".vacation__tab");
const paneUI = $$(".vacation__pane");

tabUI.forEach((tab, index) => {
    tab.onclick = function (e) {
        console.log(paneUI[index]);
        const activeElem = e.target.closest(".vacation__tab");
        const lineActive = $(".vacation__line-act");
        const paneWrap = $(".vacation__panes");
        const offsetActive = paneUI[index].offsetLeft;
        console.log(offsetActive);
        lineActive.style.left = activeElem.offsetLeft + "px";
        paneWrap.style.left = -1 * offsetActive + "px";
    };
});
