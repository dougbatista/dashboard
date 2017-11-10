import { Component } from '@angular/core';
import { CategoriaService } from '../../services/services.categoria';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent {

  newCategoria:any = {};
  categoriaForm: FormGroup;
  foto_categoria;
  nm_categoria;
  cd_restaurante;
  contentType;

  constructor(private _categoriaService: CategoriaService){

    this.cd_restaurante = localStorage.getItem('token');
  }

  getFoto(event) {}

  cadastrar(event) {
    event.preventDefault();
    
    this.newCategoria = {
      nm_categoria: this.nm_categoria,
      cd_restaurante: this.cd_restaurante,
      foto_categoria: this.foto_categoria,
      contentType: this.contentType
    }

    this._categoriaService.addNewCategoria(this.newCategoria)
      .subscribe(() => {
        console.log('Categoria salva com sucesso!');
      }, err => {
        JSON.stringify(err); 
      });
  }
}
