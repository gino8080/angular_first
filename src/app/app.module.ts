// Moduli ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Componenti
import { AppComponent } from './app.component';
import { TitoloComponent } from './titolo/titolo.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

// Services
import { CocktailsService } from './cocktails.service';
import { AbstractPipe } from './abstract.pipe';
import { CocktailItemComponent } from './cocktail-item/cocktail-item.component';
import { CocktailDetailComponent } from './cocktail-item/cocktail-detail/cocktail-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TitoloComponent,
    TopbarComponent,
    FooterComponent,
    LoginComponent,
    CocktailListComponent,
    AbstractPipe,
    CocktailItemComponent,
    CocktailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CocktailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
