import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"

import { AppComponent }  from './app.component';
import { MenuComponent} from './menu.component';
import { NouvellesComponent} from './nouvelles.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MenuComponent , NouvellesComponent],
  bootstrap:    [ AppComponent, MenuComponent , NouvellesComponent]

})
export class AppModule { }
