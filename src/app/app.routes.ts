import { RouterModule, Routes} from '@angular/router';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { GarcomComponent } from './garcom/garcom.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { PratoComponent } from './prato/prato.component';

const appRoutes: Routes = [

  { path: '', component: RestauranteComponent},
  { path: 'restaurante/new', component: RestauranteComponent},
  { path: 'prato/new', component: PratoComponent  },
  { path: 'garcom/new', component: GarcomComponent },
  { path: 'categorias/new', component: CategoriasComponent },
  { path: 'SubCategoria/new', component: SubCategoriaComponent },
  { path: 'authenticate/new', component: AuthenticateComponent }
]

export const routing = RouterModule.forRoot(appRoutes);