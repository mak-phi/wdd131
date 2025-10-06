const input = document.querySelector("#favchap");
const submitButton = document.querySelector("button")
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

submitButton.addEventListener("click", function () {
    if (input.value.trim() == "") {
        input.focus();
    }
    else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus;
    }
});

chaptersArray.forEach((chapter) => { displayList(chapter) });

function displayList(item) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.ariaLabel = `Delete ${item.textContent}`;
    // console.log(deleteButton.ariaLabel);

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", function () {
        deleteChapter(item);
        list.removeChild(listItem);
        input.value = "";
        input.focus();
    });
}

function setChapterList() {
    window.localStorage.setItem("favList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(window.localStorage.getItem("favList"));
}

function deleteChapter(chapter) {
    chaptersArray.splice(chaptersArray.indexOf(chapter), 1);
}