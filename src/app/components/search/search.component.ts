import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  artists: any[] = [];
  isLoading = false;

  constructor(private spotifyService: SpotifyService) {}

  search(searchTerm: string) {
    this.isLoading = true;
    this.spotifyService.search(searchTerm).subscribe((artists: any) => {
      this.artists = artists
      this.isLoading = false;
    })
  }

}
