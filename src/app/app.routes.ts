import { RouterModule, Routes} from '@angular/router';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { GarcomComponent } from './garcom/garcom.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { PratoComponent } from './prato/prato.component';
import { MesaComponent } from './mesa/mesa.component';
import { AuthGuard } from '../_guards/auth.guard';

const appRoutes: Routes = [
  
  { path: 'login', component: AuthenticateComponent},
  { path: '', component: CategoriasComponent, canActivate:[AuthGuard]},
  { path: 'mesa/new', component: MesaComponent, canActivate:[AuthGuard]},
  { path: 'restaurante/new', component: RestauranteComponent, canActivate:[AuthGuard]},
  { path: 'prato/new', component: PratoComponent, canActivate:[AuthGuard]},
  { path: 'garcom/new', component: GarcomComponent, canActivate:[AuthGuard]},
  { path: 'SubCategoria/new', component: SubCategoriaComponent, canActivate:[AuthGuard]},
  
]

export const routing = RouterModule.forRoot(appRoutes);