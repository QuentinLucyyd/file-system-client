import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListingResponse} from "../models/ListingResponse";
import {Observable, take, throwError} from "rxjs";
import {Listing} from "../models/Listing";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = 'http://localhost:4040';

  constructor(private httpClient: HttpClient) { }

  public getDirectoryListing(path: string): Observable<Listing[]> {
    const url = `${this.SERVER_URL}/listing/`.concat((path == '') ? '' : `/sub?path=${path}`);
    console.log(url);
    return this.httpClient.get<ListingResponse>(url).pipe(
      map((data: ListingResponse) => {
        return data.data;
    }), catchError( err => {
      throw throwError('Directory listing error');
      })
    )
  }
}
