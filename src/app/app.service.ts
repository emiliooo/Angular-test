import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/model/config.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  config: Config = {
    apiUrl: 'http://jsonplaceholder.typicode.com'
  };

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<[any]>(`${this.config.apiUrl}/photos`);
  }

}