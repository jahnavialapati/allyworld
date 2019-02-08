import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {HeaderComponent} from './header/header.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'header',component: HeaderComponent},
  {path: '',component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
   
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }