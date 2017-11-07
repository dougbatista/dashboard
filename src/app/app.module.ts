import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PeddiClientComponent } from './peddi-client/peddi-client.component';
import { GarcomComponent } from './garcom/garcom.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    PeddiClientComponent,
    GarcomComponent,
    CategoriasComponent,
    SubCategoriaComponent,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
