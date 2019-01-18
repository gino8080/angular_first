import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from 'src/app/cocktails.service';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit {

  cocktail: Cocktail;

  constructor(
    private route: ActivatedRoute,
    private service: CocktailsService
  ) { }

  ngOnInit() {

    console.log(this.route);

    this.route.paramMap.subscribe((params) => {
      console.log('params', params);

      const cocktailId = params.get('id');

      this.service.getCocktail(cocktailId).then((cocktail: Cocktail) => {
        setTimeout(() => {
          this.cocktail = cocktail;
        }, 1000);

      });


    });
  }

}
