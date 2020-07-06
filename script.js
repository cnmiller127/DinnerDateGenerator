const numDrinkBtns = 3;
isDrink = true;
var queryURL, btnVal, userInput, drinkID, mealID, drinkObj, mealObj;
var select = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var notInitialized = true; 
var haveDrink = false;
var haveMeal = false;
var isRestart = false;
var linkURL;
var storageDrink = [];
var storageMeal = [];



function pullAPI(queryURL){

$.ajax({
    url: queryURL,
    method: "GET",
    success: function(data, status, jqXHR){
        
    },
    error: function(jqXHR, textStatus, errorThrown) {
    }

    }).then(function(response){
    //console.log(response);
    //console.log(select)
    console.log(isRestart);
        var array, index;
        //By ingredient
        if (select[0] === true){
            array = response.drinks;
            $("#dI-sel").append($("<option>").addClass("dI-op").text("DRINK UP!!").val("selected disabled"));
            for(var i = 0; i < array.length; i++) {
                $("#dI-sel").append($("<option>").addClass("dI-op").text(array[i].strIngredient1)); 
            }
            select[0] = false;
            fillDC();   
        }

       else if (select[1] === true){
            
            array = response.drinks;
            index = Math.floor(Math.random()*(array.length-1))
            //console.log(index);
            drinkID = array[index].idDrink;
            //console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            
            select[1] = false;
            $("#drink").empty();
            getDrink();
        }
        //By category
       else if (select[2] === true){
            array = response.drinks;
            $("#dC-sel").append($("<option>").addClass("dC-op").text("DRINK UP!!").val("selected disabled"));
            for(var i = 0; i < array.length; i++) {
                $("#dC-sel").append($("<option>").addClass("dC-op").text(array[i].strCategory)) 
               //console.log(array[i].strCategory);
            }
            select[2] = false;
            fillDG();
        
        }
       else if (select[3] === true){
            
            array = response.drinks;
            index = Math.floor(Math.random()*(array.length-1))
            //console.log(index);
            drinkID = array[index].idDrink;
            //console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[3] = false;
            $("#drink").empty();
            getDrink(); 
        }
        //By Glass
        else if (select[4] === true){
            array = response.drinks;
            $("#dG-sel").append($("<option>").addClass("dG-op").text("DRINK UP!!").val("selected disabled"));
            //Last index of API array is empty so subtract 1 from length
            for(var i = 0; i < (array.length - 1); i++) {
                $("#dG-sel").append($("<option>").addClass("dG-op").text(array[i].strGlass)) 
               //console.log(array[i].strGlass);
            }
            select[4] = false;
            randDrink();
            
        }
       else if (select[5] === true){
            
            array = response.drinks;
            index = Math.floor(Math.random()*(array.length-1)) 
            //console.log(index);
            drinkID = array[index].idDrink;
           // console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[5] = false;
            $("#drink").empty();
            getDrink(); 
        }
        else if (select[6] === true){
                if(isRestart === false){
                    
                    fillMI();
                }
                else{
                    isRestart = false; 
                    console.log(isRestart);
                }
                select[6] = false;
        }

            
        else if (select[7] === true){
            
            array = response.drinks;
            console.log(queryURL);
            drinkID = array[0].idDrink;
            //console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[7] = false;
            $("#drink").empty();
            getDrink(); 
        }

        //MEALS BELOW
        else if (select[8] === true){
            array = response.meals;
            $("#mI-sel").append($("<option>").addClass("mI-op").text("BON APPETIT!").val("selected disabled"));
            for(var i = 0; i < array.length; i++) {
                $("#mI-sel").append($("<option>").addClass("mI-op").text(array[i].strIngredient)); 
            }
            select[8] = false;
            fillMC();   
        }

       else if (select[9] === true){
            
            array = response.meals;
            index = Math.floor(Math.random()*(array.length-1))
            //console.log(index);
            mealID = array[index].idMeal;
            //console.log(mealID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            
            select[9] = false;
            $("#meal").empty();
            getMeal();
        }
        //By category
       else if (select[10] === true){
            array = response.meals;
            $("#mC-sel").append($("<option>").addClass("mC-op").text("BON APPETIT!").val("selected disabled"));
            for(var i = 0; i < array.length; i++) {
                $("#mC-sel").append($("<option>").addClass("mC-op").text(array[i].strCategory)) 
               //console.log(array[i].strCategory);
            }
            select[10] = false;
            fillMA();
        
        }
       else if (select[11] === true){
            
            array = response.meals;
            index = Math.floor(Math.random()*(array.length-1))
            //console.log(index);
            mealID = array[index].idMeal;
            //console.log(mealID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[11] = false;
            $("#meal").empty();
            getMeal(); 
        }
        //By Area
        else if (select[12] === true){
            array = response.meals;
            //Last index of API array is empty so subtract 1 from length
            $("#mA-sel").append($("<option>").addClass("mA-op").text("BON APPETIT!").val("selected disabled"));
            for(var i = 0; i < (array.length - 1); i++) {
                $("#mA-sel").append($("<option>").addClass("mA-op").text(array[i].strArea)) 
               //console.log(array[i].strArea);
            }
            select[12] = false;
            randMeal();
        
        }
       else if (select[13] === true){
            
            array = response.meals;
            index = Math.floor(Math.random()*(array.length-1))
            //console.log(index);
            mealID = array[index].idMeal;
            //console.log(mealID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[13] = false;
            $("#meal").empty();
            getMeal(); 
        }
        else if (select[14] === true){
            
            select[14] = false;
            
        }

        else if (select[15] === true){
            
            array = response.meals;
            mealID = array[0].idMeal;
            //console.log(meal)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[15] = false;
            $("#meal").empty();
            getMeal(); 
        }
        else if(haveDrink === true){
            haveDrink = false;
            drinkObj = response.drinks[0];
            console.log("root" + drinkObj.strDrink)
            displayDrink();
            
        }
        else if(haveMeal === true){
            haveMeal = false;
            mealObj = response.meals[0];
            displayMeal();
            
        }
    
    })
}

// Create dropdown for drinks by ingredient
function fillDI(){
    select[0] = true;
 $("#drink").append($("<div>").addClass("dropdown").attr("id", "dI-div"));
    $("#dI-div").append($("<label>").attr("id", "drink-ing-list").addClass("dropdown-content").text("Drink by Ingredient: "));
    $("#dI-div").append($("<select>").addClass("selection").attr("id", "dI-sel")); 
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
    pullAPI(queryURL);
}

// Create dropdown for drinks by category
function  fillDC(){
    select[2] = true; 
    $("#drink").append($("<div>").addClass("dropdown").attr("id", "dC-div"));
    $("#dC-div").append($("<label>").attr("id", "drink-cat-list").addClass("dropdown-content").text("Drink by category: "));
    $("#dC-div").append($("<select>").addClass("selection").attr("id", "dC-sel"));
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    pullAPI(queryURL);
}
    
// Create dropdown for drinks by glass
function fillDG(){
    select[4] = true; 
    $("#drink").append($("<div>").addClass("dropdown").attr("id", "dG-div"));
    $("#dG-div").append($("<label>").attr("id", "drink-glass-list").addClass("dropdown-content").text("Drink by glass: "));
    $("#dG-div").append($("<select>").addClass("selection").attr("id", "dG-sel"));
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
    pullAPI(queryURL);

}


        
// End of fn make not initialized true
function randDrink(){
    select[6] = true;
    $("#drink").append($("<div>").addClass("rand-div").attr("id", "dR-div"));
    $("#dR-div").append($("<button>").attr("id", "dR-btn").addClass("btn rand-btn m-2").text("Random Drink"));
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    pullAPI(queryURL);
    
    
}
//MEAL FUNCTIONS BEGIN HERE
function fillMI(){
    select[8] = true;
    $("#meal").append($("<div>").addClass("dropdown").attr("id", "mI-div"));
    $("#mI-div").append($("<label>").attr("id", "meal-ing-list").addClass("dropdown-content").text("Meal by Ingredient: "));
    $("#mI-div").append($("<select>").addClass("selection").attr("id", "mI-sel")); 
    queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
    pullAPI(queryURL);
}

// Create dropdown for dmeal by category
function fillMC(){
    select[10] = true;
    $("#meal").append($("<div>").addClass("dropdown").attr("id", "mC-div"));
    $("#mC-div").append($("<label>").attr("id", "meal-cat-list").addClass("dropdown-content").text("Meal by Category: "));
    $("#mC-div").append($("<select>").addClass("selection").attr("id", "mC-sel")); 
    queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    pullAPI(queryURL);
}
    
// Create dropdown for meal by area
function fillMA(){
    select[12] = true;
    $("#meal").append($("<div>").addClass("dropdown").attr("id", "mA-div"));
    $("#mA-div").append($("<label>").attr("id", "meal-ar-list").addClass("dropdown-content").text("Meal by Region: "));
    $("#mA-div").append($("<select>").addClass("selection").attr("id", "mA-sel")); 
    queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    pullAPI(queryURL);
}


        
// Random meal
function randMeal(){
    select[14] = true;
    $("#meal").append($("<div>").addClass("rand-div").attr("id", "mR-div"));
    $("#mR-div").append($("<button>").attr("id", "mR-btn").addClass("rand-btn btn m-2").text("Random Meal"));
    queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
    pullAPI(queryURL);   
}
function getDrink(){
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;
    haveDrink = true;
    //console.log(queryURL);
    pullAPI(queryURL);
}
function getMeal(){
    queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
    haveMeal = true;
    pullAPI(queryURL);
}

function displayDrink(){
    //console.log(drinkObj)
    var dImgEl = $("<img>").attr("src", drinkObj.strDrinkThumb).addClass("item-img");
    $("#drink").append(dImgEl);
    var dNameEl = $("<h2>").text(drinkObj.strDrink).addClass("item-hdr");
    $("#drink").append(dNameEl);
    var x = 1;
    var strIngredient = "strIngredient" + x;
    var strMeasure = "strMeasure" + x;
    //console.log(drinkObj[strIngredient])
    //Add ingredients
    while(drinkObj[strIngredient] !== null || drinkObj[strMeasure] !== null){ 
        var ingEl = $("<p>").text(drinkObj[strMeasure] + " " + drinkObj[strIngredient]).addClass("ingredients p-info");
        console.log(x)
        $("#drink").append(ingEl);
        x++;
        strMeasure = "strMeasure" + x;
        strIngredient = "strIngredient" + x;
    
    }
    var descEl = $("<p>").text("Instructions: " + drinkObj.strInstructions).addClass("instructions p-info");
    $("#drink").append(descEl);
    $("#drink").append($("<button>").attr("id", "drink-restart").addClass("btn restart-btn m-2").text("Pick another"));
    $("#drink").append($("<button>").attr("id", "drink-fav").addClass("btn fav-btn m-2").text("Favorite"));
    console.log(drinkObj);

}
function displayMeal(){
    var mImgEl = $("<img>").attr("src", mealObj.strMealThumb).addClass("item-img");
    $("#meal").append(mImgEl);
    var mNameEl = $("<h2>").text(mealObj.strMeal).addClass("item-hdr");
    $("#meal").append(mNameEl);
    linkURL = mealObj.strSource;
    var mdescEl = $("<a>").text("Click here for a scrumptious recipe!").attr({id: "meal-link", href: linkURL, style: "display:block"}).addClass("recipe my-2");
    //console.log(mealObj.strSource);
    $("#meal").append(mdescEl);
    $("#meal").append($("<button>").attr("id", "meal-restart").addClass("btn restart-btn m-2").text("Pick another"));
    $("#meal").append($("<button>").attr("id", "meal-fav").addClass("btn fav-btn m-2").text("Favorite"));
}




fillDI();




//Event listener for dropdown list selection

$(".content-area").change((function(event){
    event.preventDefault();
    var item;
    if(event.target.matches("#dI-sel"))
    {
        select[1] = true; 
        item = ($("#dI-sel option:selected").text()).trim();
        //console.log(item)
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + item;
        pullAPI(queryURL);
    }
    else if(event.target.matches("#dC-sel"))
    {
        select[3] = true; 
        item = ($("#dC-sel option:selected").text()).trim();
        //console.log(item);
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + item;
        pullAPI(queryURL);
    }
    else if(event.target.matches("#dG-sel"))
    {
        select[5] = true; 
        item = ($("#dG-sel option:selected").text()).trim();
        //console.log(item);
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + item;
        pullAPI(queryURL);
    }
    // MEal selection
    if(event.target.matches("#mI-sel"))
    {
        select[9] = true; 
        item = ($("#mI-sel option:selected").text()).trim();
        //console.log(item)
        queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + item;
        pullAPI(queryURL);
    }
    else if(event.target.matches("#mC-sel"))
    {
        select[11] = true; 
        item = ($("#mC-sel option:selected").text()).trim();
        //console.log(item);
        queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + item;
        pullAPI(queryURL);
    }
    else if(event.target.matches("#mA-sel"))
    {
        select[13] = true; 
        item = ($("#mA-sel option:selected").text()).trim();
        //console.log(item);
        queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + item;
        pullAPI(queryURL);
    }

}))

// Drink random
$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#dR-btn"))
    {
        select[7] = true; 
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        //console.log(select);
        pullAPI(queryURL);
        

    }
}))

// Meal Random
$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#mR-btn"))
    {
        select[15] = true; 
        queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
        pullAPI(queryURL);

    }
}))

$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#meal-link"))
    {
        window.open(linkURL, '_blank');

    }
}))

$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#drink-restart"))
    {
        $("#drink").empty();
        isRestart = true;
        fillDI();
        

    }
    //Adds drink to favorites
    if(event.target.matches("#drink-fav"))
    {
        
        
        if(JSON.parse(localStorage.getItem("fav-drinks")) !== null){
            storageDrink = JSON.parse(localStorage.getItem("fav-drinks"));
        }
        storageDrink.push(drinkObj);
        localStorage.setItem("fav-drinks", JSON.stringify(storageDrink))
        $(event.target).remove();
        $("#drink").append($("<p>").text("Added to favorites!"));
        
        
        
    }
    if(event.target.matches("#meal-fav"))
    {
        if(JSON.parse(localStorage.getItem("fav-meals")) !== null){
            storageMeal = JSON.parse(localStorage.getItem("fav-meals"));
        }
        console.log(mealObj)
        storageMeal.push(mealObj);
        localStorage.setItem("fav-meals", JSON.stringify(storageMeal))
        $(event.target).remove(); 
        $("#meal").append($("<p>").text("Added to favorites!"));
    }

    
}))
$(".content-area").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#meal-restart"))
    {
        $("#meal").empty();
        fillMI();

    }
}))
