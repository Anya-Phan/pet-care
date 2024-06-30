const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Slide Transition For About */
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

/* Not transition - Monthly or Yearly? */
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

/* Slide Transition For Review */
const listReview = $$(".review__item");
const listDots = $$(".review__dot");
const arrowLeft = $(".reviews__wrap-svg-left");
const arrowRight = $(".reviews__wrap-svg-right");

function nextItem(currentItem, currentIndex) {
    listDots.forEach((item) => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    });
    currentItem.classList.add("active");
    const currentReview = listReview[currentIndex];
    const review = $(".reviews__list");
    review.style.left = -1 * currentReview.offsetLeft + "px";
}

let currentIndex = 0;

//Khi bấm nút dot slide
listDots.forEach((item, index) => {
    item.onclick = function () {
        currentIndex = index;
        nextItem(item, currentIndex);
    };
});

//Khi bấm mũi tên
arrowLeft.onclick = function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = listReview.length - 1;
    }
    nextItem(listDots[currentIndex], currentIndex);
};

arrowRight.onclick = function () {
    currentIndex++;
    if (currentIndex > listReview.length - 1) {
        currentIndex = 0;
    }
    nextItem(listDots[currentIndex], currentIndex);
};

/* Transition for header*/
const navItems = $$(".header__nav-item");
navItems.forEach((item, index) => {
    item.onclick = function () {
        navItems.forEach((item) => {
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });
        item.classList.add("active");
    };
});
