import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiantEntryComponent } from './patiant-entry/patiant-entry.component';
import { PatiantSearchComponent } from './patiant-search/patiant-search.component';
import { PatiantDeleteComponent } from './patiant-delete/patiant-delete.component';
import { RouterModule } from '@angular/router';



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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
