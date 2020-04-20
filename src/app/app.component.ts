import { Component, OnInit } from '@angular/core';
import { AlbumService } from "./services/albums.service"
import { CountryService } from "./services/countries.service"
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
  public userSelected = ""
  public albumes : Album[];
  public tracks : Track[] = [];
  public countries : any[] = [];
  public countrySelected = "all" 
  public genders : any[] = [];
  public genreSelected = "all" 
  public sorters : any[] = [
    { value : "ASC", name : "Ascending" },
    { value : "DESC", name : "Descending" }
  ]
  public sortSelected : string = "ASC" 

  dtOptions: DataTables.Settings = {};

  showUserData(idToShow){
    this.userSelected = idToShow
  }

  constructor(
    private _AlbumService : AlbumService,
    private _CountryService : CountryService
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
    console.log(this.countrySelected, this.genreSelected, this.sortSelected)
    this._AlbumService.getAlbumsByCountry(this.countrySelected,this.genreSelected,this.sortSelected).subscribe(result => {
      this.albumes = [...result.albums]
    })
  }

  getCountries(){
    this._CountryService.getCountry().subscribe(result => {
      console.log(result)
      this.countries = [...result.country]
    })
  }

  getAllGenders(){
    this._AlbumService.getGeners().subscribe(result => {
      console.log(result)
      this.genders = [...result.albums]
    })
  }

}
