import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RegisterComponent } from './components/register/register.component';
import { SecondComponent } from './components/second/second.component';


const routes: Routes = [
  { path: "", component: MovieSearchComponent },
  { path: "movie-detail", component: MovieDetailsComponent },
  { path: "register", component: RegisterComponent},
  { path: "login", component: SecondComponent},
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
