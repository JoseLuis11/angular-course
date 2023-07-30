import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  HEADERS = new HttpHeaders({
    'Authorization': 'Bearer BQAjEcHg4_dAsUQo8oljDiTsB1P-t6owV5BljJWxBZAJElI57ZQ1SuQZR0J6_rx_aGAGy3IQGX83CIngvdY28GRKfkpwT-2pr6Sdp7b7xp_Wz_9uEXo'
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
