/**
 * menu.component.ts - Composant représentant le menu d'affichage de l'application
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Component, OnInit } from '@angular/core';
import { PolyDataService } from './poly-data.service';

@Component({
  selector: 'header-menu-component',
  templateUrl: 'app/headermenu.component.html',
  styleUrls: ['../poly.css'],
  providers: [ PolyDataService ]
})

export class HeaderMenuComponent implements OnInit {
  headerMenuItems: Object;

  constructor(private polyDataService: PolyDataService) {console.log("headermenu") }

  getListeHeaderMenuItems():void {
    this.polyDataService.getListeHeaderMenuItems()
      .then((response: Object) => this.headerMenuItems = response)
      .catch(this.handleError);
      console.log('getHeaderMenuItems');
  }


  // À compléter 
  // ...

  ngOnInit(): void {
    // À compléter ...
    this.getListeHeaderMenuItems();
  }

  // Méthode de gestion d'erreur.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

