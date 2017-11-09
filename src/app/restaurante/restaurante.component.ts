import { Component } from '@angular/core';
import { RestauranteService } from '../../services/services.restaurante';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {

  newRestaurante:any = {
    endereco: {}
  };
  restauranteForm: FormGroup;

  constructor(private _restauranteService: RestauranteService){}

  cadastrar(event) {
    event.preventDefault();

    this._restauranteService.addNewRestaurant(this.newRestaurante)
      .subscribe(() => {
        console.log('Novo restaurante adicionado com sucesso');
      }, err => {
        JSON.stringify(err);
      });
  }

}
