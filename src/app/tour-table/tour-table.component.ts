import { UserService } from './../user.service';
import { STATUS, ACCESS_LEVEL } from './../constants/constants';
import { TourService } from './../tour.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent implements OnInit {

  tours: Tour[] = [];
  loggedin_user : User;
  user_access_level = ACCESS_LEVEL.ACCESS_LEVEL_EMPLOYEE;
  user_id = -1;

  constructor(private tourService: TourService,
    private router:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.getTours();
    this.getLoggedInUser();
  }

  getTours(): void {
    this.tourService.getTours()
      .subscribe(tours => this.tours = tours);
  }

  getLoggedInUser() {
    this.userService.dummy();
    this.loggedin_user = this.userService.getUser();
    this.user_access_level = this.loggedin_user.access_level;
    this.user_id = this.loggedin_user.id;
  }

  isVisible(tour: Tour, type:String):boolean {
    
    if (type == "submit") {
      if (this.user_access_level != ACCESS_LEVEL.ACCESS_LEVEL_EMPLOYEE) {
        return false;
      } else {
        return true;
      }
    } else if (type == "approve") {
      if (tour.status == STATUS.STATUS_SUBMITTED && this.user_access_level==ACCESS_LEVEL.ACCESS_LEVEL_MANAGER) {
        return true;
      } else if (tour.status == STATUS.STATUS_APPROVED_MANAGER && this.user_access_level == ACCESS_LEVEL.ACCESS_LEVEL_FINANCE_MANAGER) {
        return true;
      } else {
        return false;
      }
    } else if (type == "reject") {
      if (this.user_access_level == ACCESS_LEVEL.ACCESS_LEVEL_MANAGER && tour.status == STATUS.STATUS_SUBMITTED) {
        return true;
      } else if (this.user_access_level == ACCESS_LEVEL.ACCESS_LEVEL_FINANCE_MANAGER && tour.status == STATUS.STATUS_APPROVED_MANAGER) {
        return true;
      } else {
        return false;
      }
    } else if (type == "request") {
      if (this.user_access_level == ACCESS_LEVEL.ACCESS_LEVEL_EMPLOYEE && tour.status == STATUS.STATUS_REQUEST_FOR_INFORMATION) {
        return true;
      } else {
        return false;
      }
    }
  }

  isOwner(tour : Tour):boolean {
    if (this.user_id == tour.userid) {
      console.log("owner", this.user_id, " ", tour.userid)
      return true;
    } else {
      console.log("not owner", this.user_id, " ", tour.userid)
      return false;
    }
  } 

  gotoDetails(tour : Tour) {
    this.tourService.tour_cache = tour;
    this.router.navigate(['/tourdetail']);
  }

  approve(tour : Tour) {
    if (tour.status == STATUS.STATUS_SUBMITTED) {
      tour.status = STATUS.STATUS_APPROVED_MANAGER;
    } else if (tour.status == STATUS.STATUS_APPROVED_MANAGER) {
      tour.status = STATUS.STATUS_APPROVED_FINANCE;
    }
    this.tourService.updateTour(tour).subscribe(tour => {
      console.log("updated tour")
    });
  }

  dosubmit(tour : Tour) {
    if (tour.status == STATUS.STATUS_DRAFT) {
      tour.status = STATUS.STATUS_SUBMITTED;
    } else if (tour.status == STATUS.STATUS_REQUEST_FOR_INFORMATION) {
      tour.status = STATUS.STATUS_SUBMITTED;
    }
    this.tourService.updateTour(tour).subscribe(tour => {
      console.log("updated tour")
    });
  }

  reject(tour : Tour) {
    tour.status = STATUS.STATUS_REJECTED;
    this.tourService.updateTour(tour).subscribe(tour => {
      console.log("updated tour")
    });
  }

  requestforinfo(tour : Tour) {
    tour.status = STATUS.STATUS_REQUEST_FOR_INFORMATION;
    this.tourService.updateTour(tour).subscribe(tour => {
      console.log("updated tour")
    });
  }

}
