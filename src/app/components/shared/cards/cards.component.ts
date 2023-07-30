import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) {}

  getArtistsByAlbum(album: any) {
    return album.artists.map((artist: any) => artist.name)
  }

  seeArtist(item: any): void {
    const artistId = item.type === 'artist' ? item.id : item.artists[0].id

    this.router.navigate(['artists', artistId])
  }
}
