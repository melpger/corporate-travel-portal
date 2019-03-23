import { FormControl } from '@angular/forms';
import { STATUS } from './../constants/constants';
import { TourService } from './../tour.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  tour : Tour;
  startdate: any;
  enddate:any;

  constructor(
    private location: Location,
    private tourService:TourService) { 

  }

  ngOnInit(): void {
    this.getTour();
  }

  getTour(): void {
    this.tour = this.tourService.getTourCache();
    console.log(this.tour)
    this.startdate = new FormControl(new Date(this.tour.startDate));
    this.enddate = new FormControl(new Date(this.tour.endDate));
  }

  updateTour() {
    console.log("addtour")

    let tour : Tour = {
      id: this.tour.id,
      purposeOfTour: this.tour.purposeOfTour,
      startDate: this.startdate.value,
      endDate: this.enddate.value,
      modeofTravel: this.tour.modeofTravel,
      ticketCost: this.tour.ticketCost,
      airportCabCostHomeCity: this.tour.airportCabCostHomeCity,
      airportCabCostDestCity: this.tour.airportCabCostDestCity,
      hotelCost: this.tour.hotelCost,
      localConveyanceAtTourLoc: this.tour.localConveyanceAtTourLoc,
      status:this.tour.status,
      userid:this.tour.userid,
      hotelbillpath:this.tour.hotelbillpath,
    };

    console.log(tour);

    this.tourService.updateTour(tour).subscribe(tour => {
      console.log("updated tour")
    });


    this.location.back();

  }

  goBack(): void {
    this.location.back();
  }

}
