import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiantEntryComponent } from './patiant-entry/patiant-entry.component';
import { PatiantSearchComponent } from './patiant-search/patiant-search.component';
import { PatiantDeleteComponent } from './patiant-delete/patiant-delete.component';
import { Route, RouterModule, Routes } from '@angular/router';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatiantEntryComponent,
    PatiantSearchComponent,
    PatiantDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
