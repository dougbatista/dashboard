import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { GarcomComponent } from './garcom/garcom.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { PratoComponent } from './prato/prato.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { URLServices } from '../services/services.url';

//providers
import { GarcomService } from '../services/services.garcom';
import { CategoriaService } from '../services/services.categoria';
import { SubCategoriasService } from '../services/services.subCategorias';
import { RestauranteService } from '../services/services.restaurante';
import { PratosServices } from '../services/services.pratos';
import { AuthGuard } from '../_guards/auth.guard';
import { AuthService } from '../services/services.auth';
import { MesaComponent } from './mesa/mesa.component';
import { MesaServices } from '../services/services.mesa';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    GarcomComponent,
    CategoriasComponent,
    SubCategoriaComponent,
    AuthenticateComponent,
    PratoComponent,
    MesaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    GarcomService,
    CategoriaService,
    SubCategoriasService,
    URLServices,
    RestauranteService,
    PratosServices,
    AuthGuard,
    AuthService,
    MesaServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
