import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './Mycomponents/button/button.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { CarouselComponent } from './Mycomponents/carousel/carousel.component';
import { CardsComponent } from './Mycomponents/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
