const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const pageHeader = document.querySelector("main").children[0];

pageHeader.textContent = document.querySelector(".active").innerHTML;

const menuBtn = document.createElement("button");

menuBtn.classList.add("menu");
header.insertBefore(menuBtn, header.children[1]);

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

let activeNavigationKey = null;
let clickCount = 0;

navigation.addEventListener("click", (event) => {
    /* Determine target nav key and assign "active" class for wayfinder styling */
    const target = event.target;
    if (target !== navigation) {
        clickCount++;
        if (clickCount == 1) {
            /* Check if nav key is clicked once and hide nav list after click */
            if (activeNavigationKey) {
                activeNavigationKey.classList.remove("active");
            }
            target.classList.add("active");
            activeNavigationKey = target;

            pageHeader.textContent = activeNavigationKey.textContent;

            navigation.classList.toggle("open");
            menuBtn.classList.toggle("open");
            clickCount = 0;
        }
    }
    else {
        if (activeNavigationKey) {
            activeNavigationKey.classList.remove("active");
        }
        activeNavigationKey = null;
    }
});

