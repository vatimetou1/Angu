import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '**', redirectTo: '404'},
  // {path: '404', component: PageNotFoundComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
