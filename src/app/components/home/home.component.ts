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
    error = {
        exists: false,
        message: ''
    }

    constructor(private spotifyService: SpotifyService) {
      this.isLoading = true;
      this.spotifyService.getNewReleases().subscribe({
        next: (newReleases: any) => {
            this.newReleases = newReleases;
            this.isLoading = false;
            this.error.exists = false;
        },
        error: error => {
            console.log(error.error);
            this.error.exists = true;
            this.error.message = error.error.error.message;
            this.isLoading = false
        }
      });
    }

    getArtistsByAlbum(album: any) {
      return album.artists.map((artist: any) => artist.name)
    }

}
