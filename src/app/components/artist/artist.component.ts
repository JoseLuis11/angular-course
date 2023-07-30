import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

    artist: any = {};
    topTracks: any[] = []
    isLoading = false;

    constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService, private location: Location) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({id}) => {
            this.isLoading = true;
            this.getArtist(id)
            this.getArtistTopTracks(id);
        });
    }

    getArtist(id: string): void {
        this.spotifyService.getArtistById(id).subscribe(artist => {
            this.artist = artist
            this.isLoading = false
        })
    }

    getArtistTopTracks(id: string): void {
        this.spotifyService.getArtistTopTracksById(id).subscribe(topTracks => {
            console.log(topTracks);
            
            this.topTracks = topTracks
        })
    }

    goBack(): void {
        this.location.back();
    }

}
