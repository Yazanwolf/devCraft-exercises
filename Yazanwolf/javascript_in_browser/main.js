const itemsList = getUlList();
const addElementButton = getAddItemButton();
const inputField = getInput();

addElementButton.addEventListener("click", () => {
    executeAddElement();
});

function executeAddElement() {
    const inputText = inputField.value;
    if (!inputText) {
        return;
    }
    addNewItem(inputText);
    inputField.value = "";
    inputField.focus();
}

function addNewItem(itemText) {
    const itemElement = createItemElement(itemText);
    itemsList.appendChild(itemElement);
}

function createItemElement(itemText) {
    const liElement = document.createElement("li");
    liElement.appendChild(createTextElement(itemText));
    liElement.appendChild(createDeleteButton(liElement));
    return liElement;
}

function createTextElement(itemText) {
    const textElement = document.createElement("span");
    textElement.textContent = itemText;
    return textElement;
}

function createDeleteButton(liElement) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        itemsList.removeChild(liElement);
    });
    return deleteButton;
}

function getUlList() {
    const ulList = document.getElementsByTagName("ul");
    if (!ulList || ulList.length === 0) {
        throw new Error("No Ul elements found!");
    }
    return ulList[0];
}

function getAddItemButton() {
    const buttons = document.getElementsByTagName("button");
    if (!buttons || buttons.length === 0) {
        throw new Error("No Button elements found!");
    }
    return buttons[0];
}

function getInput() {
    const inputList = document.getElementsByTagName("input");
    if (!inputList || inputList.length === 0) {
        throw new Error("No input elements found!");
    }
    return inputList[0];
}