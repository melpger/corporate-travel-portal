import { AlertService } from './../alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { 
    this.subscription = this.alertService.getMessage().subscribe(message => { 
      this.message = message; 
  });
  }

  ngOnInit() {
    this.subscription.unsubscribe();
  }

}
