import { Constants } from './constants/constants';
import { Tour } from './tour';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TourService {
  public tour_cache: Tour;
  private toursURL = Constants.TOUR_API_ENDPOINT;  // URL to web api


  constructor(
    private http: HttpClient) 
    { }

  getTours (): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursURL)
      .pipe(
        catchError(this.handleError<Tour[]>('getHeroes', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** POST: add a new hero to the server */
  addTour (tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.toursURL, tour, httpOptions).pipe(
      tap((newTour: Tour) => console.log("added new tour")),
      catchError(this.handleError<Tour>('addHero'))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getTour(id: number): Observable<Tour> {
    const url = `${this.toursURL}/${id}`;
    return this.http.get<Tour>(url).pipe(
      catchError(this.handleError<Tour>(`getTour id=${id}`))
    );
  }

  getTourCache() {
    return this.tour_cache;
  }

  /** PUT: update the hero on the server */
  updateTour (tour: Tour): Observable<any> {
    return this.http.put(this.toursURL, tour, httpOptions).pipe(
      tap(_ => console.log("update hero")),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
