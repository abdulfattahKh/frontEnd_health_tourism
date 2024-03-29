import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesModule } from '../../utilties/utilities.module';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { travelAgenciesRoutingModule } from './travelAgencies.routing.module';
import { TravelAgenciesComponent } from './travel-agencies/travel-agencies.component';
import { TravelAgenciesTableComponent } from './travel-agencies/travel-agencies-table/travel-agencies-table.component';
import { AddTravelAgencyComponent } from './travel-agencies/add-travel-agency/add-travel-agency.component';

@NgModule({
  declarations: [TravelAgenciesComponent, TravelAgenciesTableComponent, AddTravelAgencyComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilitiesModule,
    ThemeModule,
    travelAgenciesRoutingModule
  ]
})
export class TravelAgenciesModule { }
