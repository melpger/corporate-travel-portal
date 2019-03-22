import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourInputComponent } from './tour-input/tour-input.component';
import { TourTableComponent } from './tour-table/tour-table.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] , children:[
    { path: '', redirectTo: '/tourtable', pathMatch: 'full' },
    { path: 'tourtable', component: TourTableComponent },
    { path: 'tourinput', component: TourInputComponent },
    { path: 'tourdetail', component: TourDetailComponent },
  ] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
