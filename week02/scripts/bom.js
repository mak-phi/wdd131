const input = document.querySelector("#favchap");
const submitButton = document.querySelector("button")
const list = document.querySelector("#list");

submitButton.addEventListener("click", function () {
    if (input.value.trim() == "") {
        input.focus();
    }
    else {
        const item = document.createElement("li");
        const deleteButton = document.createElement("button");

        item.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.ariaLabel = `Delete ${item.textContent}`;
        // console.log(deleteButton.ariaLabel);

        item.appendChild(deleteButton);
        list.appendChild(item);

        deleteButton.addEventListener("click", function () {
            list.removeChild(item)
            input.focus();
        });

        input.value = "";
        input.focus();
    }
});
