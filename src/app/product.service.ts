import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

  constructor(private http: Http) { }
  private _albumUrl = '../assets/album.json';

  getMethod(id: number): Observable<Response> {
    return this.http.get(this._albumUrl).map((response: Response) => response.json()) 
  }
}
