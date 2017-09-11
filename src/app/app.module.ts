// 3rd party- stuff that angular wrote
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Stuff written by us
import { AppComponent }  from './app.component';

// So this metadata describes the class that follows it
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what do I need for module
  declarations: [ AppComponent ],  // what components are in my app
  bootstrap:    [ AppComponent ] // where do I start?
})
export class AppModule { }
