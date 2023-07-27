import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {

  @Input() items: any[] = [];

  getArtistsByAlbum(album: any) {
    return album.artists.map((artist: any) => artist.name)
  }
}
