import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

/**
 * Class representing application service.
 *
 * @class AppService.
 */
@Injectable({
  providedIn: 'root',
})
export class HorseService {
    private horsesURL = '/api/horses';
    private serviceUrl = '/api/summary';
 
    constructor(private http: HttpClient) {
    }
 
    /**
    * Makes a http get request to retrieve the welcome message from the backend service.
    */
    public getHorses() {
      return this.http.get(this.horsesURL).pipe(
        map(response => response)
      );
    }
    
}
