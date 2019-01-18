import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private myService: CocktailsService) { }

  ngOnInit() {
    this.myService.getCocktails('')
      .then((cocktails: Cocktail[]) => {

        console.log('cocktails ricevuti!', cocktails);
        this.cocktails = cocktails;
      });
  }

}
