import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail-item/cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path: 'cocktails',
    component: CocktailListComponent
  },
  {
    path: 'cocktails/:id',
    component: CocktailDetailComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
