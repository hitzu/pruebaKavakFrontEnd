import { Component, OnInit } from '@angular/core';
// import { AlbumService } from "../../services/albums.service"
// import { Album } from "../../models/Album.model"

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent  {

  // public data : Album[];

  // dtOptions: DataTables.Settings = {};

  // constructor(
  //   private _AlbumService : AlbumService
  // ) { }

  // ngOnInit(): void {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 10,
  //     processing: true
  //   };
  //   this._AlbumService.getAlbumsByCountry("PE","ROCK","ASC").subscribe(result => {
  //     console.log(result)
  //     this.data = [...result.albums]
  //   })
  // }

}
