import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { MenuComponent} from './menu.component';
import { HeaderMenuComponent} from './headermenu.component';
import { NouvellesComponent} from './nouvelles.component';
import { PolyDataService } from './poly-data.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NouvellesComponent, MenuComponent, HeaderMenuComponent],
  bootstrap:    [ AppComponent, NouvellesComponent, MenuComponent, HeaderMenuComponent]

})
export class AppModule { }
