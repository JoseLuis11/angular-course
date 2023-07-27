import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    newReleases: any[] = [];
    isLoading = false;

    constructor(private spotifyService: SpotifyService) {
      this.isLoading = true;
      this.spotifyService.getNewReleases().subscribe((newReleases: any) => {
        this.newReleases = newReleases;
        this.isLoading = false;
      });
    }

    getArtistsByAlbum(album: any) {
      return album.artists.map((artist: any) => artist.name)
    }


}
