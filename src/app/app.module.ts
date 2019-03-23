import { ErrorInterceptor } from './error-interceptor';
import { JwtInterceptor } from './jwt-interceptor';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourTableComponent } from './tour-table/tour-table.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TourInputComponent } from './tour-input/tour-input.component';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { UserService } from './user.service';
import { TourService } from './tour.service';
import { fakeBackendProvider } from './fake-backend-interceptor';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TourTableComponent,
    TourInputComponent,
    TourDetailComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    FormBuilder,
    AlertService,
    AuthenticationService,
    UserService,
    TourService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
