import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLServices } from './services.url';

@Injectable()
export class AuthService {

  http: Http;
  headers: Headers;
  url: URLServices;

  constructor(http: Http, url: URLServices) {
    this.http = http;
    this.url = url;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  auth(data) {
    return new Promise ((resolve, reject) => {
      this.http.post(`${ this.url.url_local()}/autenticar-restaurante`, data)
      .subscribe((res) => {
        let data = res.json();
        localStorage.setItem('token', data);
        resolve(data);
      }, err => {
        JSON.stringify(err);
        reject(err);
      });
    });
  }

  logout() {
    return localStorage.clear();
  }
   
}