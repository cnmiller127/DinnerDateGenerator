const numDrinkBtns = 3;
isDrink = true;
var queryURL, btnVal, userInput, drinkID, mealID;
var select = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var notInitialized = true; 
var haveDrink = false;
var haveMeal = false;


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
        var array, index;
        //By ingredient
        if (select[0] === true){
            array = response.drinks;
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
            $(".drink-col").empty();
            getDrink();
        }
        //By category
       else if (select[2] === true){
            array = response.drinks;
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
            $(".drink-col").empty();
            getDrink(); 
        }
        //By Glass
        else if (select[4] === true){
            array = response.drinks;
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
            index = Math.floor(Math.random()*(array.length-1)) // 
            //console.log(index);
            drinkID = array[index].idDrink;
           // console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[5] = false;
            $(".drink-col").empty();
            getDrink(); 
        }
        else if (select[6] === true){
            select[6] = false;
            fillMI();
        }
            
        else if (select[7] === true){
            
            array = response.drinks;
            console.log(queryURL);
            drinkID = array[0].idDrink;
            //console.log(drinkID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[7] = false;
            $(".drink-col").empty();
            getDrink(); 
        }

        //MEALS BELOW
        else if (select[8] === true){
            array = response.meals;
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
            $(".meal-col").empty();
            getMeal();
        }
        //By category
       else if (select[10] === true){
            array = response.meals;
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
            $(".meal-col").empty();
            getMeal(); 
        }
        //By Area
        else if (select[12] === true){
            array = response.meals;
            //Last index of API array is empty so subtract 1 from length
            for(var i = 0; i < (array.length - 1); i++) {
                $("#mA-sel").append($("<option>").addClass("mA-op").text(array[i].strArea)) 
               //console.log(array[i].strArea);
            }
            select[12] = false;
            randMeal();
        
        }
       else if (select[13] === true){
            
            array = response.meals;
            index = Math.floor(Math.random()*(array.length-2)) // Last index is empty so subtract 2
            //console.log(index);
            mealID = array[index].idMeal;
            //console.log(mealID)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[13] = false;
            $(".meal-col").empty();
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
            $(".meal-col").empty();
            getMeal(); 
        }
        else if(haveDrink === true){
            displayDrink(response.drinks[0]);
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
    $("#dG-div").append($("<label>").attr("id", "drink-glass-list").addClass("dropdown-content").text("Drink by glass"));
    $("#dG-div").append($("<select>").addClass("selection").attr("id", "dG-sel"));
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
    pullAPI(queryURL);

}


        
// End of fn make not initialized true
function randDrink(){
    select[6] = true;
    $("#drink").append($("<div>").addClass("rand-div").attr("id", "dR-div"));
    $("#dR-div").append($("<button>").attr("id", "dR-btn").addClass("rand-btn").text("Random Drink"));
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
    $("#mR-div").append($("<button>").attr("id", "mR-btn").addClass("rand-btn").text("Random Meal"));
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

function displayDrink(drinkObj){
    //console.log(drinkObj)
    var dNameEl = $("<h2>").text(drinkObj.strDrink);
    $("#drink").append(dNameEl);
    var dImgEl = $("<img>").attr("src", drinkObj.strDrinkThumb);
    $("#drink").append(dImgEl);
    var descEl = $("<p>").text(drinkObj.strSource);
    $("#drink").append(descEl);

}
function displayMeal(mealObj){
    var name = $("<h2").text(mealObj.strMeal)

}


fillDI();




//Event listener for dropdown list selection

$(".container-fluid").change((function(event){
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
$(".container-fluid").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#dR-btn"))
    {
        select[7] = true; 
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        console.log(select);
        pullAPI(queryURL);
        

    }
}))

// Meal Random
$(".container-fluid").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#mR-btn"))
    {
        select[15] = true; 
        queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
        pullAPI(queryURL);

    }
}))