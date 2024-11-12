const allCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});