import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail, Ingredient } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/';


  constructor(private http: HttpClient) { }

  getCocktails(searchTerm: string = '') {

    console.log('getCocktails', searchTerm);

    const params = { s: searchTerm };

    const call = this.http.get(
      this.url + 'search.php',
      {
        // params: datas //sono identiche le due righe
        params
      }
    );

    return call.toPromise()
      .then((response: { drinks: object[] }) => {
        console.log('response', response);

        const cocktailList: Cocktail[] = this.parseCocktails(response.drinks);
        return cocktailList;
      })
      .catch((error) => {
        console.error('error', error);
      })
      .finally(() => {
        console.log('finally!');
      });

  }


  getCocktail(cocktailId: number) {
    const call = this.http.get(
      this.url + 'lookup.php',
      {
        params: {
          i: `${cocktailId}`
        }
      }
    );

    return call.toPromise()
      .then((response: { drinks: object[] }) => {
        console.log('response', response);

        const cocktailList: Cocktail[] = this.parseCocktails(response.drinks);
        return cocktailList[0] || {};
      })
      .catch((error) => {
        console.error('error', error);
      })
      .finally(() => {
        console.log('finally!');
      });
  }

  parseCocktails(drinks: object[]): Cocktail[] {

    console.log('drinks', drinks);

    const Cocktails: Cocktail[] = drinks.map((currentElement: any) => {

      const newCocktail: Cocktail = {
        id: currentElement.idDrink,
        name: currentElement.strDrink,
        category: currentElement.strCategory,
        glass: currentElement.strGlass,
        description: currentElement.strInstructions,
        image: currentElement.strDrinkThumb,
        date: currentElement.dateModified
      };

      console.log('currentElement', currentElement, 'newCocktail', newCocktail);

      return newCocktail;

    }); // end map

    console.log('Cocktails', Cocktails);
    return Cocktails;
  }

}
