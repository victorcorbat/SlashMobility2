import { Component, OnInit } from '@angular/core';

import { ItunesService }  from './services/itunes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-itunes';
  songs;
  favourites = [];

  constructor(private itunesService: ItunesService){
    this.songs=null;
  }

  isFavourite(songId){
    if(this.favourites.includes(songId)){
      return true;
    }
    else{
      return false;
    }
  }

  favMehtod($event, $name){
    console.log($event);

    if($event.event=='eventFav'){
      
      this.favourites.push($name);

    }
    if($event.event=='eventUnFav'){
      
      const index = this.favourites.indexOf($name);
      if (index > -1) {
        this.favourites.splice(index, 1);
      }

    }

    
  }

  
  submitArtist(artistName: HTMLInputElement){

    this.itunesService.getSongsByArtists(artistName.value)
    .subscribe(
      res=>{
        this.songs = res,
        console.log(res)
      },
      err=>console.log(err)
    )
    artistName.value = '';
    artistName.focus();
    return false;

  }
}
