import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    MovieSearchComponent,
    MovieDetailsComponent,
    MovieHomeComponent,
    NavbarComponent, 
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
