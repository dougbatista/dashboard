import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLServices } from './services.url';

@Injectable()
export class PratosServices {

  http: Http;
  headers: Headers;
  url: URLServices;

  constructor(http: Http, url: URLServices){
    this.url = url;
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  addNewPlate(plate) {
    return this.http.post(`${ this.url.url_local() }/pratos/new`, plate,
     { headers: this.headers });
  }
}