interface Cocktail {
  id: number;
  name: string;
  category: string;
  glass: string;
  description: string;
  image: string;
  date: string;
  ingredients?: Ingredient[];
}

interface Ingredient {
  name: string;
  quantity: string;
}

export {
  Cocktail,
  Ingredient
};


const cocktailModel = {
  'idDrink': '17195',
  'strDrink': 'Bellini',
  'strCategory': 'Ordinary Drink',
  'strAlcoholic': 'Alcoholic',
  'strGlass': 'Champagne Flute',
  'strInstructions': '',
  'strDrinkThumb': 'https://www.thecocktaildb.com/images/media/drink/eaag491504367543.jpg',
  'dateModified': '2017-09-02 16:52:23'
};
