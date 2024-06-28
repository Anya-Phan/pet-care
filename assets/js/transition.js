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

const listCare = $$(".price__list");
const isBoxChecked = $("#price__switch-check");

isBoxChecked.onchange = function () {
    if (isBoxChecked.checked === false) {
        listCare[1].style.display = "none";
        listCare[0].style.display = "grid";
    } else {
        listCare[0].style.display = "none";
        listCare[1].style.display = "grid";
    }
};
