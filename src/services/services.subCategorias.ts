import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLServices } from './services.url';

@Injectable()
export class SubCategoriasService {

  http: Http;
  headers: Headers;
  url: URLServices;

  constructor(http: Http, url: URLServices) {
    this.http = http;
    this.url = url;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  addNewSubCategoria(subCategoria) {
    return this.http.post(`${ this.url.url_local() }/subcategorias/new`, JSON.stringify(subCategoria),
     { headers : this.headers });
  }

  getSubCategorias(categoria_id) {
    return this.http.get(`${ this.url.url_local() }/subcategorias/` + categoria_id)
      .map(res => res.json());
  }
}