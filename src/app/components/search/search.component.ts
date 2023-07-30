import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  searchTerm: string = '';
  isLoading = false;

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({q}) => {
        this.searchTerm = q;
        this.search(q);
    })
  }

  onType() {
    this.router.navigate(['.'], {queryParams: {q: this.searchTerm}, relativeTo: this.activatedRoute, replaceUrl: true})
  }

  clear() {
    this.searchTerm = ''
    this.onType();
  }

  search(searchTerm: string) {
    this.isLoading = true;
    this.spotifyService.searchForArtists(searchTerm).subscribe((artists: any) => {
      this.artists = artists
      this.isLoading = false;
    })
  }

}
