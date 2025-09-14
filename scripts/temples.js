const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const pageHeader = document.querySelector("main").children[0];

pageHeader.textContent = document.querySelector(".active").innerHTML;

const menuBtn = document.createElement("button");

menuBtn.classList.add("menu");
header.insertBefore(menuBtn, header.children[1]);

menuBtn.addEventListener("click", () => {
    header.classList.toggle("open");
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

let activeNavigationKey = null;

navigation.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== navigation) {
        if (activeNavigationKey) {
            activeNavigationKey.classList.remove("active");
        }
        target.classList.add("active");
        activeNavigationKey = target;
        pageHeader.textContent = activeNavigationKey.textContent;
    }
    else {
        if (activeNavigationKey) {
            activeNavigationKey.classList.remove("active");
        }
        activeNavigationKey = null;
    }
});

