import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  HEADERS = new HttpHeaders({
    'Authorization': 'Bearer BQBJAO1juVYOXWk1swUvm7IFpvi1gZliZreSxJLbk3c-gmRPnTiUzZb-mHWMEGVx8XSz_QF9Wnk5r994ukRAUcg-JBa49PLW7AdkGasEGn3WK_HS9Qo'
  });

  API_URL = 'https://api.spotify.com'
  VERSION = 'v1';

  constructor(private http: HttpClient) {}

  getNewReleases(): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.VERSION}/browse/new-releases`, { headers: this.HEADERS })
      .pipe(map((data: any) => data.albums.items));
  }

  searchForArtists(searchTerm: string): Observable<any> {
    if (!searchTerm) {
      return new Observable(subscriber => {
        subscriber.next([])
      })
    }
    return this.http.get(`${this.API_URL}/${this.VERSION}/search?q=${searchTerm}&type=artist`, { headers: this.HEADERS })
      .pipe(map((data: any) => data.artists.items));
  }

  getArtistById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.VERSION}/artists/${id}`, {headers: this.HEADERS});
  }

  getArtistTopTracksById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.VERSION}/artists/${id}/top-tracks?country=MX`, {headers: this.HEADERS})
        .pipe(map((data: any) => data.tracks));
  }
}
