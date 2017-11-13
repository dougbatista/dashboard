import { Component, OnInit } from '@angular/core';
import { MesaServices } from '../../services/services.mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  mesaModel = {};

 constructor(private mesaService: MesaServices) {}

  ngOnInit() {}

  addNewMesa(event) {
    event.preventDefault();
    this.mesaService.addNewMesa(this.mesaModel)
      .subscribe(() => {
        console.log('Mesa cadastrada com sucesso!');
      }, err => {
        JSON.stringify(err);
      });
  }  
}
