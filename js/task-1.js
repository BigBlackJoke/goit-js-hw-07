const categories = document.querySelectorAll(".item");
console.log("Number of categories: " + (categories.length));

categories.forEach(category => {
    const nameOfCategory = category.querySelector("h2").textContent;
    const eachCategoryItems = category.querySelectorAll("li").length;
    console.log(`Category: ${nameOfCategory}`);
    console.log(`Elements: ${eachCategoryItems}`);
});