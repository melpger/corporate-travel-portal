import { STATUS } from './constants/constants';
import { Tour } from './tour';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tours = [
      { id: 1, purposeOfTour: 'Leisure', startDate:"2019/4/23", endDate:"2019/4/25",modeofTravel:"Plane",ticketCost:1000,airportCabCostHomeCity:500,airportCabCostDestCity:300,hotelCost:1500,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_DRAFT, userid:1 },
      { id: 2, purposeOfTour: 'Business', startDate:"2019/7/11", endDate:"2019/8/12",modeofTravel:"Bus",ticketCost:500,airportCabCostHomeCity:100,airportCabCostDestCity:50,hotelCost:600,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_SUBMITTED, userid:1},
      { id: 3, purposeOfTour: 'Others', startDate:"2019/4/1", endDate:"2019/5/5",modeofTravel:"Train",ticketCost:15000,airportCabCostHomeCity:1000,airportCabCostDestCity:500,hotelCost:10000,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_APPROVED_MANAGER, userid:1},
      { id: 4, purposeOfTour: 'Others', startDate:"2019/5/1", endDate:"2019/6/5",modeofTravel:"Car",ticketCost:15000,airportCabCostHomeCity:1000,airportCabCostDestCity:500,hotelCost:10000,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_APPROVED_FINANCE, userid:1 },
      { id: 5, purposeOfTour: 'Others', startDate:"2019/6/1", endDate:"2019/7/5",modeofTravel:"Cruise",ticketCost:15000,airportCabCostHomeCity:1000,airportCabCostDestCity:500,hotelCost:10000,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_REJECTED, userid:1 },
      { id: 6, purposeOfTour: 'Others', startDate:"2019/7/1", endDate:"2019/8/5",modeofTravel:"Plane",ticketCost:15000,airportCabCostHomeCity:1000,airportCabCostDestCity:500,hotelCost:10000,localConveyanceAtTourLoc:"nothing", status:STATUS.STATUS_REQUEST_FOR_INFORMATION, userid:1 },

    ];
    return {tours};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the tours array is empty,
  // the method below returns the initial number (11).
  // if the tours array is not empty, the method below returns the highest
  // tour id + 1.
  genId(tours: Tour[]): number {
    return tours.length > 0 ? Math.max(...tours.map(tour => tour.id)) + 1 : 11;
  }
}