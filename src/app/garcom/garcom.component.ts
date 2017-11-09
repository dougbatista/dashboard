import { Component } from '@angular/core';
import { GarcomService } from '../../services/services.garcom';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-garcom',
  templateUrl: './garcom.component.html',
  styleUrls: ['./garcom.component.css']
})

export class GarcomComponent {

  newGarcom:any = {};
  garcomForm: FormGroup;

  constructor(private _garcomService: GarcomService) { }

  cadastrar(event) {
    event.preventDefault();
   
    this._garcomService.addNewGarcom(this.newGarcom)
      .subscribe(() => {
        console.log('Garcom salvo com sucesso!');
      }, err => {
        JSON.stringify(err);
      }); 
  }



}
