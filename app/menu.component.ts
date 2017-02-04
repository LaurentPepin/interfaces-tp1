/**
 * menu.component.ts - Composant représentant le menu d'affichage de l'application
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Component, OnInit } from '@angular/core';
import { PolyDataService } from './poly-data.service';

@Component({
  selector: 'menu-table',
  templateUrl: 'app/menu.component.html',
  styleUrls: ['../poly.css'],
  providers: [ PolyDataService ]
})

export class MenuComponent implements OnInit {
  menuItems: Object;

  constructor(private polyDataService: PolyDataService) { }

  getListeMenuItems():void {
    this.polyDataService.getListeMenuItems()
      .then((response: Object) => this.menuItems = response)
      .catch(this.handleError);
      console.log('getListeMenuItems');
  }


  // À compléter 
  // ...

  ngOnInit(): void {
    // À compléter ...
    this.getListeMenuItems();
  }

  // Méthode de gestion d'erreur.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

