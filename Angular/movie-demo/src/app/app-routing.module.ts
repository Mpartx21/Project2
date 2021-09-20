import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RegisterComponent } from './components/register/register.component';
import { SecondComponent } from './components/second/second.component';
import { HomeComponent } from './components/home/home.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { CardsComponent } from './components/cards/cards.component';


const routes: Routes = [
  { path: "", component: MovieSearchComponent},
  { path: "home", component: CardsComponent },
  { path: "movie-detail", component: MovieDetailsComponent },
  { path: "register", component: RegisterComponent},
  { path: "login", component: SecondComponent},
  { path: "movie-detail", component: MovieDetailsComponent},
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
