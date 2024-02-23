import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { TripCardComponent } from "./trip-card/trip-card.component";
import { TripDataService } from "./services/trip-data.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRouterModule } from "./app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  providers: [TripDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
