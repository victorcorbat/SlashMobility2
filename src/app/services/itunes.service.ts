import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  URI: string='';
  favourites = [];

  constructor(private httpClient: HttpClient) { 
    //https://itunes.apple.com/search?term=rem
    this.URI = 'https://itunes.apple.com/search?entity=song&term=';
  }

  getSongsByArtists(artistName: string){
    return this.httpClient.get(`${this.URI}${artistName}`);
  }

  
}
