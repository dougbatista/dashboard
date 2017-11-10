import { Component } from '@angular/core';
import { SubCategoriasService } from '../../services/services.subCategorias';
import { CategoriaService } from '../../services/services.categoria';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.css']
})

export class SubCategoriaComponent {

  newSubCategoria:any = {};
  categorias:any;
  subCategoriaForm: FormGroup;

  constructor(private _subCategService: SubCategoriasService, 
    private _categoriaService: CategoriaService) {
    
    let token = localStorage.getItem('token');
  
    this._categoriaService.getCategorias(token)
      .subscribe(categorias => {
        this.categorias = categorias;
      });   
  }

  cadastrar(event) {
    event.preventDefault();

    console.log(this.newSubCategoria);
  
    this._subCategService.addNewSubCategoria(this.newSubCategoria)
      .subscribe(() => {
        console.log('Nova sub-categoria adicionada com sucesso!');
      }, err => {
        JSON.stringify(err);
      }); 
  }
}
