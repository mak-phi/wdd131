const productSelectionList = document.querySelector("#product");
const reviewForm = document.querySelector(".review");

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateProducts() {
    products.forEach((product) => {
        let option = document.createElement("option");
        option.setAttribute("value", product.name);
        option.textContent = capitalizeWords(product.name);

        productSelectionList.append(option);
    });
}

function capitalizeWords(words) {
    let splitWords = words.split(" ");
    let formattedWords = splitWords.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return formattedWords.join(" ");
}

populateProducts();

reviewForm.addEventListener("submit", () => {
    let count = 0;
    if (!window.localStorage.getItem("countOfReviews")) {
        count++;
    } else {
        count = parseInt(localStorage.getItem("countOfReviews"));
        count++;
    }
    window.localStorage.setItem("countOfReviews", JSON.stringify(count));
});
