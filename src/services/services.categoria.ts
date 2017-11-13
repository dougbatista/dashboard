import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLServices } from './services.url';

@Injectable()
export class CategoriaService {

  http: Http;
  headers: Headers;
  url: URLServices;

  constructor(http: Http, url: URLServices) {
    this.http = http;
    this.url = url;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  addNewCategoria(categoria) {
    return this.http.post(`${ this.url.url_dev() }/categorias`, categoria);
  }

  getCategorias(id) {
    return this.http.get(`${ this.url.url_dev() }/categorias?/` + id)
      .map(res => res.json());
  }
}