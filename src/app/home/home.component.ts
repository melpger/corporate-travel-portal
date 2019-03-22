import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSrvc: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authSrvc.logout();
    this.router.navigate(['/login']);
  }

}
