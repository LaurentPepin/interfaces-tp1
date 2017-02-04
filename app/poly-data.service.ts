/**
 * poly-data.service.ts - Service pour lire et fournir les données aux composants
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PolyDataService {

  // À compléter
  // ...

  constructor(private http: Http) {  console.log('Poly-data constructor');}

  getListeNouvelles(): Promise<Object> {
    return this.http.get('../data/nouvelles.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
     
  }

  getListeMenuItems():Promise<Object> {
    return this.http.get('../data/menuItems.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getListeHeaderMenuItems():Promise<Object> {
    return this.http.get('../data/menu.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }



  // À compléter
  // ...

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
