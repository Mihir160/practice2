
   let drinks =[
       {name:'Mojito', img:'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg'},
       {name:'Old Fashioned', img:'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg'},
       {name:'Long Island Tea', img:'https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg'},
       {name:'Negroni', img:'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg'},
       {name:'Whiskey Sour', img:'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg'},
       {name:'Dry Martini', img:'https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg'},
       {name:'Daiquiri', img:'https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg'},
       {name:'Margarita', img:'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'},
       

    ]
let ingredients = [
   {name:'Vodka', img:'https://www.thecocktaildb.com/images/ingredients/Vodka.png'},
   {name:'Gin', img:'https://www.thecocktaildb.com/images/ingredients/Gin.png'},
   {name:'Rum', img:'https://www.thecocktaildb.com/images/ingredients/Rum.png'},
   {name:'Tequila', img:'https://www.thecocktaildb.com/images/ingredients/Tequila.png'},
]

//  const drinksarray = (popularDrinks.drinks)
for(let drink of drinks){
   // console.log(drink)
   const drinkContainer = document.getElementById('popularDrinks')
   const drinkdiv = document.createElement('div')
   drinkdiv.innerHTML =`
   
   <img src="${drink.img}" alt="Italian Trulli">
   <h1 class="mt-4">${drink.name}</h1>
   
   `
   drinkContainer.appendChild(drinkdiv)
}

for(let ingredient of ingredients)  {
   const ingredientContainer = document.getElementById('Ingredients')
   const ingredientDiv = document.createElement('div')
   ingredientDiv.innerHTML = `
   <img src="${ingredient.img}" alt="Italian Trulli">
   <h1 class="mt-4 text-center">${ingredient.name}</h1>
   `
   ingredientContainer.appendChild(ingredientDiv)
}

const loadsDrink = (search) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayDrinks(data.drinks));
}


const displayDrinks = drinks =>{
   const drinkContainer = document.getElementById('popularDrinks')
   drinkContainer.innerHTML = ``
   for(let drink of drinks){
       console.log(drink)
      
      const drinkdiv = document.createElement('div')
      drinkdiv.innerHTML =`
      
      <img src="${drink.strDrinkThumb}" alt="Italian Trulli">
      <h1 class="mt-4">${drink.strDrink}</h1>
      
      `
      drinkContainer.appendChild(drinkdiv)
   }
}
const searchDrink = () =>{
   const searchField = document.getElementById('search-field')
   const searchText = searchField.value;
   console.log(searchText)
   loadsDrink(searchText);
}