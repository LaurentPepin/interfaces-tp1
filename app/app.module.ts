import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { MenuComponent} from './menu.component';
import { HeaderMenuComponent} from './headermenu.component';
import { NouvellesComponent} from './nouvelles.component';
import { PolyDataService } from './poly-data.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ NouvellesComponent, MenuComponent, HeaderMenuComponent],
  bootstrap:    [ NouvellesComponent, MenuComponent, HeaderMenuComponent]

})
export class AppModule { }
