import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import {HttpClientModule} from '@angular/common/http';
import { CharacterService } from './services/characters.service';
import {RouterModule, Routes} from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HousesService } from './services/houses.service';
import { BookService } from './services/books.service';
import { AddressComponent } from './address/address.component';
import { AddressService } from './services/address.service';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    BooksComponent,
    HousesComponent,
    NavBarComponent,
    HomeComponent,
    BooksComponent,
    HousesComponent,
    AddressComponent,
    CallbackComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'characters', component:CharactersComponent},
      {path:'houses', component:HousesComponent},
      {path:'books', component:BooksComponent},
      {path:'addresses', component:AddressComponent},
      {path:'people', component:PeopleComponent},
      {path: '**', component:HomeComponent}
    ], {useHash:true}),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CharacterService,
    HousesService,
    BookService,
    AddressService,
    AuthService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
