import { Component, OnInit } from '@angular/core';
import { AlbumService } from "./services/albums.service"
import { Album } from "./models/Album.model"
import { Track } from "./models/tracks.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data : Album[];
  public tracks : Track[] = [];
  public countries : string[] = [];
  public countrySelected = "" 
  public genders : string[] = [];
  public genreSelected = "" 
  public sorters : any[] = [
    { value : "ASC", name : "Ascending" },
    { value : "DESC", name : "Descending" }
  ]
  public sortSelected : string = "ASC" 

  dtOptions: DataTables.Settings = {};

  showData(idToShow){
    console.log(idToShow)
  }

  constructor(
    private _AlbumService : AlbumService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      paging: false,
      ordering : false,
      info : false,
      searching : false
    };
    this.searchAgain()
  }
  
  searchAgain(){
    console.log(this.sortSelected)
    this._AlbumService.getAlbumsByCountry("PE","ROCK",this.sortSelected).subscribe(result => {
      console.log(result)
      this.data = [...result.albums]
    })
  }

}
