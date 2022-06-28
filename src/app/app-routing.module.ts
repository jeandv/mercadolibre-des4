import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { DescripcionComponent } from './component/descripcion/descripcion.component';
import { PageNoFoundComponent } from './component/page-no-found/page-no-found.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'descripcion/:id', component: DescripcionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNoFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
