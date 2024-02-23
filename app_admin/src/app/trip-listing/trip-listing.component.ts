import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[];

  message: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  private addTrip(): void {
    console.log("TripListingComponent#addTrip");
    this.router.navigate(["add-trip"]);
  }

  private getTrips(): void {
    console.log("TripListingComponent#getTrips");
    this.message = "Loading trips...";
    this.tripDataService
      .getTrips()
      .then((foundTrips) => {
        this.trips = foundTrips;
        this.message = this.trips.length > 0 ? "" : "No trips found";
      });
  }
  ngOnInit(): void {
    this.getTrips();
  }
}