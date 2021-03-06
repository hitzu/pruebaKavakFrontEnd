import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
 

@Injectable({
	providedIn: "root"
})
export class AlbumService {
    private url : string;
    
    constructor(private _http:HttpClient) {
        this.url = environment.URL_SERVER;
    }

    getAlbumsByCountry( countryCode : string, genre : string, sort : string ):Observable<any> {
        let headers = new HttpHeaders({ "Content-type": "application/json" })
        return this._http.get(`${this.url}albums/byUserCountryAndGenre/${countryCode}/${genre}/${sort}`, {headers : headers})
    }

    getGeners():Observable<any> {
        let headers = new HttpHeaders({ "Content-type": "application/json" })
        return this._http.get(`${this.url}albums/genres`, {headers : headers})
    }

}