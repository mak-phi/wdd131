const header = document.querySelector("header");
const navigation = document.querySelector("nav");
const main = document.querySelector("main");
const pageHeader = main.children[0];

const menuBtn = document.createElement("button");
const galleryContainer = document.createElement("div");
galleryContainer.setAttribute("class", "gallery-container");
main.appendChild(galleryContainer);

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2025, May, 18",
        area: 19870,
        imageUrl: "images/nairobi-kenya-temple-960.webp"
        //  Original image url: https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-56573.jpg
    },
    {
        templeName: "Preston England",
        location: "Preston, England",
        dedicated: "1998, June, 10",
        area: 69630,
        imageUrl: "images/preston-england-temple-960.webp"
        //  Original image url: https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-56872.jpg
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl: "images/rio-de-janeiro-brazil-temple-960.webp"
        // Original image url: https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8162.jpg
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "images/sapporo-japan-temple-960.webp"
        // Original image url: https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3370.jpg
    },
    // Add more temple objects here...
];

pageHeader.textContent = document.querySelector(".active").innerHTML;

menuBtn.classList.add("menu");
menuBtn.setAttribute("aria-label", "Menu");
header.insertBefore(menuBtn, header.children[1]);

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");
});

renderTempleImages(temples);

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

            switch (target.textContent.toLowerCase()) {
                case "old":
                    const oldTemples = temples.filter((temple) => {
                        let year = parseInt(temple.dedicated.substring(0, 4));
                        return year < 1900;
                    });
                    renderTempleImages(oldTemples);
                    break;
                case "new":
                    const newTemples = temples.filter((temple) => {
                        let year = parseInt(temple.dedicated.substring(0, 4));
                        return year > 2000;
                    });
                    renderTempleImages(newTemples);
                    break;
                case "large":
                    const largeTemples = temples.filter((temple) => {
                        return temple.area > 90000;
                    });
                    renderTempleImages(largeTemples);
                    break;
                case "small":
                    const smallTemples = temples.filter((temple) => {
                        return temple.area < 10000;
                    });
                    renderTempleImages(smallTemples);
                    break;
                case "home":
                default:
                    renderTempleImages(temples);
                    break;
            }


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

function renderTempleImages(temples) {
    galleryContainer.innerHTML = "";

    if (temples.length == 1) {
        galleryContainer.classList.add("grid-one");
        galleryContainer.classList.remove("grid-two");
        galleryContainer.classList.remove("grid-three");
    } else if (temples.length == 2) {
        galleryContainer.classList.add("grid-two");
        galleryContainer.classList.remove("grid-one");
        galleryContainer.classList.remove("grid-three");
    }
    else {
        galleryContainer.classList.add("grid-three");
        galleryContainer.classList.remove("grid-one");
        galleryContainer.classList.remove("grid-two");
    }

    temples.forEach((temple) => {
        const card = document.createElement("div");
        card.setAttribute("class", "temple-card");

        const header = document.createElement("h2");
        header.innerHTML = `${temple.templeName}`;

        const para1 = document.createElement("p");
        para1.innerHTML = `Location: ${temple.location}`;

        const para2 = document.createElement("p");
        para2.innerHTML = `Dedicated: ${temple.dedicated}`;

        const para3 = document.createElement("p");
        para3.innerHTML = `Size: ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `Image of ${temple.templeName}`);
        image.setAttribute("loading", "lazy");

        card.append(header, para1, para2, para3, image);
        galleryContainer.appendChild(card);


    });
}
