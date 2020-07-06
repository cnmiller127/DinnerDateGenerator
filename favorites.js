

var dBack = true;
var mBack = true;

function favDrinksList(){
    $("#fav-drink").append($("<div>").addClass("dropdown").attr("id", "fD-div"));
    $("#fD-div").append($("<label>").attr("id", "fav-drink-list").addClass("dropdown-content").text("My favorite drinks: "));
    $("#fD-div").append($("<select>").addClass("selection").attr("id", "fD-sel"));
    $("#fD-sel").append($("<option>").addClass("fD-op").text("Select favorite").val("selected disabled"));
    for(var i = 0; i < storageDrink.length; i++) {
        $("#fD-sel").append($("<option>").addClass("fD-op").text(storageDrink[i].strDrink));
       
    }

}
function favMealsList(){
    $("#fav-meal").append($("<div>").addClass("dropdown").attr("id", "fM-div"));
    $("#fM-div").append($("<label>").attr("id", "fav-meal-list").addClass("dropdown-content").text("My favorite meals: "));
    $("#fM-div").append($("<select>").addClass("selection").attr("id", "fM-sel"));
    $("#fM-sel").append($("<option>").addClass("fD-op").text("Select favorite").val("selected disabled"));
    for(var i = 0; i < storageMeal.length; i++) {
        $("#fM-sel").append($("<option>").addClass("fM-op").text(storageMeal[i].strMeal));
       
    }

}


function loadFavoriteDrinks(){    
        if(JSON.parse(localStorage.getItem("fav-drinks")) !== null){
            storageDrink = JSON.parse(localStorage.getItem("fav-drinks"));
            favDrinksList();
        }
        else{
            $("#fav-drink").append($("<p>").addClass("p").text("You do not have any favorite drinks yet!"));             
        }     
}
function loadFavoriteMeals(){ 
    if(JSON.parse(localStorage.getItem("fav-meals")) !== null){
        storageMeal = JSON.parse(localStorage.getItem("fav-meals"));
        favMealsList();
    }
    else{
        $("#fav-meal").append($("<p>").addClass("p").text("You do not have any favorite meals yet!"));             
    }
} 
function displayDrink(){
    $("#fav-drink").empty();
    var dImgEl = $("<img>").attr("src", drinkObj.strDrinkThumb).addClass("item-img");
    $("#fav-drink").append(dImgEl);
    var dNameEl = $("<h2>").text(drinkObj.strDrink).addClass("item-hdr");
    $("#fav-drink").append(dNameEl);
    var x = 1;
    var strIngredient = "strIngredient" + x;
    var strMeasure = "strMeasure" + x;
    //console.log(drinkObj[strIngredient])
    //Add ingredients
    while(drinkObj[strIngredient] !== null || drinkObj[strMeasure] !==null){ 
        var ingEl = $("<p>").text(drinkObj[strMeasure] + " " + drinkObj[strIngredient]).addClass("ingredients p-info");
        console.log(x)
        $("#fav-drink").append(ingEl);
        x++;
        strMeasure = "strMeasure" + x;
        strIngredient = "strIngredient" + x;
    
    }
    var descEl = $("<p>").text("Instructions: " + drinkObj.strInstructions).addClass("instructions p-info");
    $("#fav-drink").append(descEl);
    $("#fav-drink").append($("<button>").attr("id", "fD-back").addClass("btn fav-btn m-2").text("Back"));
    $("#fav-drink").append($("<button>").attr("id", "fD-remove").addClass("btn fav-btn m-2").text("Remove"));
    

}
function displayMeal(){
    $("#fav-meal").empty();
    var mImgEl = $("<img>").attr("src", mealObj.strMealThumb).addClass("item-img");
    $("#fav-meal").append(mImgEl);
    var mNameEl = $("<h2>").text(mealObj.strMeal).addClass("item-hdr");
    $("#fav-meal").append(mNameEl);
    linkURL = mealObj.strSource;
    var mdescEl = $("<a>").text("Click here for a scrumptious recipe!").attr({id: "fav-meal-link", href: linkURL, style: "display:block"}).addClass("recipe my-2");
    //console.log(mealObj.strSource);
    $("#fav-meal").append(mdescEl);
    $("#fav-meal").append($("<button>").attr("id", "fM-back").addClass("btn fav-btn m-2").text("Back"));
    $("#fav-meal").append($("<button>").attr("id", "fM-remove").addClass("btn fav-btn m-2").text("Remove"));
    
}



loadFavoriteDrinks();
loadFavoriteMeals();

$(".content-area").change((function(event){
    event.preventDefault();
    var obj;
    if(event.target.matches("#fD-sel"))
    {
       
        for(var i = 0; i < storageDrink.length; i++){
            console.log($("#fD-sel option:selected").text());
            if(storageDrink[i].strDrink === ($("#fD-sel option:selected").text()))
            {
                drinkObj = storageDrink[i];
                displayDrink();
            }
        }
       
    }
    if(event.target.matches("#fM-sel"))
    {
       
        for(var i = 0; i < storageMeal.length; i++){
            console.log($("#fM-sel option:selected").text());
            if(storageMeal[i].strMeal === ($("#fM-sel option:selected").text()))
            {
                mealObj = storageMeal[i];
                console.log(storageMeal[i].strMeal)
                displayMeal();
            }
        }
       
    }
}))

$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#fD-back"))
    {
        $("#fav-drink").empty();
        loadFavoriteDrinks();
    }
}))
$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#fM-back"))
    {
        $("#fav-meal").empty();
        loadFavoriteMeals();
    }
}))

$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#fD-remove"))
    {
        $("#fav-drink").empty();
        for(var i = 0; i < storageDrink.length; i++){
            
            if(storageDrink[i].strDrink === drinkObj.strDrink)
            {
                storageDrink.splice(i, 1);
            }
        }
            localStorage.removeItem("fav-drinks");
            localStorage.setItem("fav-drinks", JSON.stringify(storageDrink));
        
        loadFavoriteDrinks();
    }
}))
$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#fM-remove"))
    {
        $("#fav-meal").empty();
        for(var i = 0; i < storageMeal.length; i++){
            
            if(storageMeal[i].strMeal === mealObj.strMeal)
            {
                storageMeal.splice(i, 1);
            }
        }
            localStorage.removeItem("fav-mealss");
            localStorage.setItem("fav-meals", JSON.stringify(storageMeal));
    
        loadFavoriteMeals();
    }
}))

$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#fav-meal-link"))
    {
        window.open(linkURL, '_blank');

    }
}));

$("#fav-music").append($("<button>").attr("id", "showfavs").addClass("btn").text("Show Favorites"));
$("#showfavs").on("click",function(event) {
parseFavoriteSongs();
});
function parseFavoriteSongs(){
    if(JSON.parse(localStorage.getItem("favTrack")) !== null){
        $("#fav-music").append($("<p>").text("songandartist"));
    }
    else{
        $("#fav-music").empty();
        $("#fav-music").append($("<p>").text("You do not have any favorite songs yet!"));
        $("#fav-music").append($("<button>").attr("id","showfavs").addClass("btn").text("Show Favorites"));
    }
}