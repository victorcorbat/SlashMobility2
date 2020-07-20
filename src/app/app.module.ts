import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { mdiCardsHeart } from '@mdi/js';

import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';



@NgModule({
  declarations: [
    AppComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
