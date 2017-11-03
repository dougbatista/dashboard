import { RouterModule, Routes} from '@angular/router';
import { RestauranteComponent } from './restaurante/restaurante.component';

const appRoutes: Routes = [

  { path: '', component: RestauranteComponent},
  { path: 'restaurante/new', component: RestauranteComponent}
]

export const routing = RouterModule.forRoot(appRoutes);