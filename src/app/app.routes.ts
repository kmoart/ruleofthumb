import { Routes } from '@angular/router';
import { VihomeComponent } from './components/vihome/vihome.component';
import { VistacuadriculaComponent } from './components/vistacuadricula/vistacuadricula.component';
import { VistalistaComponent } from './components/vistalista/vistalista.component';


export const ROUTES: Routes= [
        {path: 'vihome', component: VihomeComponent},
        { path: 'vistacuadricula', component: VistacuadriculaComponent },
        { path: 'vistalista', component: VistalistaComponent },
        { path: '', pathMatch: 'full', redirectTo: 'vihome' },
        { path:'**', pathMatch: 'full', redirectTo: 'vihome'}
];