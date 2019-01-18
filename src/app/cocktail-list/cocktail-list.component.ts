import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(private myService: CocktailsService) { }

  ngOnInit() {
    this.myService.getCocktails('bellini');
  }

}
