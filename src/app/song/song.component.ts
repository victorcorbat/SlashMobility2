import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { mdiThumbsUpDown } from '@mdi/js';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() songId: string;
  @Input() songName: string;
  @Input() imageSrc: string;
  @Input() albumName: string;
  
  @Input() favourite: boolean;

  @Output() Fav = new EventEmitter<{event: string}>();
  /*@Output() UnFav = new EventEmitter<{event: string}>();*/

  constructor() {

  }

  ngOnInit(): void {

  }

  setFavourite(){
    
    if(!this.favourite){
      this.Fav.emit({event:'eventFav'});
    }
    else{
      this.Fav.emit({event:'eventUnFav'});
      /*this.UnFav.emit({event:'eventDesc'});*/
    }

  }

}
