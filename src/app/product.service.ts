import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

  constructor(private _http: Http) { }
  private _albumUrl = '../assets/album.json';

  getAlbum(id: number): Observable<Response> {
    return this._http.get(this._albumUrl).map((response: Response) => response.json()) 
  }
}
