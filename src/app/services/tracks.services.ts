import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
 

@Injectable({
	providedIn: "root"
})
export class TrackService {
    private url : string;
    
    constructor(private _http:HttpClient) {
        this.url = environment.URL_SERVER;
    }

    getTracksByAlbum(albumid : string, sort : string):Observable<any> {
        let headers = new HttpHeaders({ "Content-type": "application/json" })
        return this._http.get(`${this.url}tracks/byAlbum/${albumid}/${sort}`, {headers : headers})
    }

}