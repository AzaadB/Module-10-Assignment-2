//This file was for listing the recipes//
const category = getCategory();
//creating a new function for the recipe list//
function getRecipeList() {
    //pass in the rootPath url in a varible(line 5)
    const rootPath = "https://mysite.itvarsity.org/api/recipe-book/";
    const fullPath = rootPath + "get-recipes/?category=" + category;
    //The fullPath variable is combonation of the rootPath, the api call and the category//
    fetch(fullPath)
        .then(function (response) {
            //inside here we return a json response//
            return response.json();
        }).then(function (data) {
            //Fixing the back button//
            document.getElementById("back").href = "index.html";
            var output = "";
            for (a = 0; a < data.length; a++) {
                //creating an output template//
                output += `
                <a href="show-recipes.html?id=${data[a].id}">
                <div class="meals-list-item">
                <h1>${data[a].title}<i class="fas fa-chevron-circle-right"></i></h1>
                <p>${data[a].description}</p>
                </div>
                </a>
                `;
                console.log("ID:", data[a].id);
                console.log("Title:", data[a].title);
                console.log("Description:", data[a].description);
                /*Itterating through the data array with a for loop, 
                that will bring back the title and description of all the recipes*/
            }
            document.getElementById("output").innerHTML = output;
        })
    //Sending the info injected to the fullPath variable to the server through the fetch api//
}
//creating a function for the categories//
function getCategory() {
    //Storing the urls in a variable//
    const url = window.location.href;
    //The pos varible holds the position of the = to sign//
    const pos = url.search("=");
    //creating a category variable//
    const category = url.slice(pos + 1);

    return category;
}