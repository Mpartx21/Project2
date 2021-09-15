import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SecondComponent } from './components/second/second.component';
import { ChildComponent } from './components/child/child.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent }
  ] },
  { path: 'second', children: [
    { path: '', component: SecondComponent, },
    { path: 'child', component: ChildComponent }
  ] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
