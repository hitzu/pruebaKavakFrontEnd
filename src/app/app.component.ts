import { Component, OnInit } from '@angular/core';
import { AlbumService } from "./services/albums.service"
import { CountryService } from "./services/countries.service"
import { TrackService } from "./services/tracks.services"
import { Album } from "./models/Album.model"
import { Track } from "./models/Tracks.model"
import { User } from "./models/User.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public users : User[] = [];
  public albumSelected = null
  public albumes : Album[];
  public countries : any[] = [];
  public countrySelected = "all" 
  public genders : any[] = [];
  public genreSelected = "all" 
  public sorters : any[] = [
    { value : "ASC", name : "Ascending" },
    { value : "DESC", name : "Descending" }
  ]
  public sortSelected : string = "ASC" 
  
  
  public tracks : Track[] = [];
  public sortersTracks : any[] = [
    { value : "ASC", name : "Ascending" },
    { value : "DESC", name : "Descending" }
  ]
  public sortSelectedTracks : string = "ASC" 


  dtOptions: DataTables.Settings = {};


  constructor(
    private _AlbumService : AlbumService,
    private _CountryService : CountryService,
    private _TrackService : TrackService
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
    this.getCountries()
    this.getAllGenders()
  }
  
  searchAgain(){
    this._AlbumService.getAlbumsByCountry(this.countrySelected,this.genreSelected,this.sortSelected).subscribe(result => {
      this.albumes = [...result.albums]
    })
  }

  getCountries(){
    this._CountryService.getCountry().subscribe(result => {
      this.countries = [...result.country]
    })
  }

  getAllGenders(){
    this._AlbumService.getGeners().subscribe(result => {
      this.genders = [...result.albums]
    })
  }

  showUserData(idToShow){
    this.albumSelected = idToShow
    this.fillTracks()
  }

  fillTracks(){
    this._TrackService.getTracksByAlbum(this.albumSelected.id,this.sortSelectedTracks).subscribe(result => {
      this.tracks = [...result.tracks]
    })
  }
}
