import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { urls } from 'src/assets/urls';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  joatmonUrl: string = environment.joatmonUrl
  joatmonUrlBasePath: string = urls.joatmonUrlBasePath
  endpointV1: string = "/v1/string/count"


  constructor(private http: HttpClient) { }

  post(body: any) {
    return this.http.post(this.joatmonUrl + this.joatmonUrlBasePath + this.endpointV1, body).pipe(take(1));
  }
}
