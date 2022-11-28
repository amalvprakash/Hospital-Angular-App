import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiantEntryComponent } from './patiant-entry/patiant-entry.component';
import { PatiantSearchComponent } from './patiant-search/patiant-search.component';
import { PatiantDeleteComponent } from './patiant-delete/patiant-delete.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { PatiantListComponent } from './patiant-list/patiant-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes =[
  {
    path:"",
    component:PatiantEntryComponent
  },
  {
    path:"search",
    component:PatiantSearchComponent
  },
  {
    path:"delete",
    component:PatiantDeleteComponent
  },
  {
    path:"list",
    component:PatiantListComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatiantEntryComponent,
    PatiantSearchComponent,
    PatiantDeleteComponent,
    PatiantListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
