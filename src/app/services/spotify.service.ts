import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  HEADERS = new HttpHeaders({
    'Authorization': 'Bearer BQBpYECnxLyd2Nv6CDWAPRE29IjoNAldqwKzMxFNw29nEPJ8YYcfC4x7Dt_l5M1z8sSMNMz1ofuTSKlB2eB47nHXOEkVIw8L8pbc5UieUDyHaagedio'
  });

  API_URL = 'https://api.spotify.com'
  VERSION = 'v1';

  constructor(private http: HttpClient) {}

  getNewReleases(): Observable<any> {
    return this.http.get(`${this.API_URL}/${this.VERSION}/browse/new-releases`, { headers: this.HEADERS })
      .pipe(map((data: any) => data.albums.items));
  }

  search(searchTerm: string): Observable<any> {
    if (!searchTerm) {
      return new Observable(subscriber => {
        subscriber.next([])
      })
    }
    return this.http.get(`${this.API_URL}/${this.VERSION}/search?q=${searchTerm}&type=artist`, { headers: this.HEADERS })
      .pipe(map((data: any) => data.artists.items));
  }
}
