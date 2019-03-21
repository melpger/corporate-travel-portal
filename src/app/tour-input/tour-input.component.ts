import { STATUS } from './../constants/constants';
import { TourService } from './../tour.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
import { Location } from '@angular/common';

@Component({
  selector: 'app-tour-input',
  templateUrl: './tour-input.component.html',
  styleUrls: ['./tour-input.component.css']
})
export class TourInputComponent implements OnInit {
  private regForm:FormGroup;
  private ticket:FormControl;

  constructor(private tourService:TourService,
    private formBuilder:FormBuilder,
    private location:Location) { 

    this.regForm=this.formBuilder.group({
      purpose:['', Validators.required],
      startdate_v:['', Validators.required],
      enddate_v:['', Validators.required],
      mode:['', Validators.required],
      ticket:['', Validators.required],
      airportcab_home:['', Validators.required],
      airportcab_dest:['', Validators.required],
      hotel:['', Validators.required],
      conveyance:['', Validators.required],      
    })
  }

  ngOnInit() {
  }

  addTour() {
    console.log("addtour")

    let tour : Tour = {
      id: 10,
      purposeOfTour: this.regForm.value.purpose,
      startDate: this.regForm.value.startdate_v,
      endDate: this.regForm.value.enddate_v,
      modeofTravel: this.regForm.value.mode,
      ticketCost: this.regForm.value.ticket,
      airportCabCostHomeCity: this.regForm.value.airportcab_home,
      airportCabCostDestCity: this.regForm.value.airportcab_dest,
      hotelCost: this.regForm.value.hotel,
      localConveyanceAtTourLoc: this.regForm.value.conveyance,
      status:STATUS.STATUS_DRAFT,
      userid:1,
      hotelbillpath:"",
    };

    console.log(tour);

    this.tourService.addTour(tour).subscribe(tour => {
      console.log("added tour")
      this.location.back();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
