import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiantEntryComponent } from './patiant-entry/patiant-entry.component';
import { PatiantSearchComponent } from './patiant-search/patiant-search.component';
import { PatiantDeleteComponent } from './patiant-delete/patiant-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PatiantEntryComponent,
    PatiantSearchComponent,
    PatiantDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
