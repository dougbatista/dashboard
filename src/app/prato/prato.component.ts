import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriaService } from '../../services/services.categoria';
import { SubCategoriasService } from '../../services/services.subCategorias';
import { PratosServices } from '../../services/services.pratos';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})

export class PratoComponent implements OnInit {

  newPlate:any = {};
  ingredientes = {};
  nm_prato: string = '';
  descricao_pequena_prato: string = '';
  descricao_prato: string = '';
  foto_prato: string = '';
  tipo_prato: string = '';
  categoria_id;
  valor_prato: Number;
  acompanhamentos = [{}];
  ponto_carne = [{}];
  removiveis = [{}];
  adicionais = [{}];

  images = [{}];


  plateForm: FormGroup;
  categoriaSelect;
  categorias;
  subCategorias;
  
  constructor(private _categoriasService: CategoriaService,
    private _subCategoriaService: SubCategoriasService,
    private _plateService: PratosServices) {

      this._categoriasService.getCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
      }, err => {
        JSON.stringify(err);
      });
    }

  ngOnInit() {

    this.images = [{
     foto_prato : "http://www.salud180.com/sites/www.salud180.com/files/134218877_1.jpg",
    }]
  }

  loadSubCategs(categoria) {
   this._subCategoriaService.getSubCategorias(categoria)
    .subscribe(subCategorias => {
      this.subCategorias = subCategorias;
    }, err => {            
      JSON.stringify(err);
    });

  }

  addAdicionais(event) {
    event.preventDefault();
    this.adicionais.push({nm_adicional: '', valor: 0});
  }

  addRemoviveis() {
    this.removiveis.push({nm_removivel: ''});
  }

  addPontoCarne() {
    this.ponto_carne.push({ponto: ''});
  }

  addAcompanhamentos() {
    this.acompanhamentos.push({acompanhamento: '', valor:0});
  }

  getFoto(event) {
    this.foto_prato = event.target.value;
    console.log(this.foto_prato);
  }

  cadastrar(event) {
    event.preventDefault();

    this.newPlate = {
      nm_prato: this.nm_prato,
      descricao_pequena_prato: this.descricao_pequena_prato,
      descricao_prato: this.descricao_prato,
      foto_prato: this.foto_prato,
      tipo_prato: this.tipo_prato,
      categoria_id: this.categoria_id,
      ingredientes: this.ingredientes,
      adicionais: this.adicionais,
      ponto_carne: this.ponto_carne,
      removiveis: this.removiveis,
      acompanhamentos: this.acompanhamentos,
      valor_prato : this.valor_prato
    }

   this._plateService.addNewPlate(this.newPlate)
    .subscribe(() => {
      console.log('Prato adicionado com sucesso!');
    }, err => {
      JSON.stringify(err);
    });
  }
}

