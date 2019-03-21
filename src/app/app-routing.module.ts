import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourInputComponent } from './tour-input/tour-input.component';
import { TourTableComponent } from './tour-table/tour-table.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tourtable', pathMatch: 'full' },
  { path: 'tourinput', component: TourInputComponent },
  { path: 'tourtable', component: TourTableComponent },
  { path: 'tourdetail', component: TourDetailComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
