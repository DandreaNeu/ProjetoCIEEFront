import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { GenerosComponent } from './components/generos/generos.component';


const routes: Routes = [

  {path: 'filmes', component: FilmesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'generos', component: GenerosComponent},
  {path: '' , redirectTo: 'dashboard' , pathMatch: 'full'},
  {path: '**' , redirectTo: 'dashboard' , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
