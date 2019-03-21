import { TourService } from './../tour.service';
import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-table',
  templateUrl: './tour-table.component.html',
  styleUrls: ['./tour-table.component.css']
})
export class TourTableComponent implements OnInit {

  tours: Tour[] = [];

  constructor(private tourService: TourService,
    private router:Router) { }

  ngOnInit() {
    this.getTours();
  }

  getTours(): void {
    this.tourService.getTours()
      .subscribe(tours => this.tours = tours);
  }

  gotoDetails(tour : Tour) {
    this.tourService.tour_cache = tour;
    this.router.navigate(['/tourdetail']);

  }

}
