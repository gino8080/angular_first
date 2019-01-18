import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  constructor(private http: HttpClient) { }

  getCocktails(searchTerm: string = '') {

    console.log('getCocktails', searchTerm);

    const params = { s: searchTerm };

    const call = this.http.get(
      this.url,
      {
        // params: datas //sono identiche le due righe
        params
      }
    );

    call.toPromise()
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.error('error', error);
      })
      .finally(() => {
        console.log('finally!');
      });

  }

}
