/**
 * Created by Fajar on 02/08/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { SharedModule } from '../../shared/shared.module';
import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';
import { LineComponent } from './line/line.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TenantsComponent } from './tenants/tenants.component';
import { OverviewComponent } from './overview/overview.component';
import { PerformanceSalesComponent } from './performance-sales/performance-sales.component';
import { PeopleCounterComponent } from './people-counter/people-counter.component';


const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'line', component: LineComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'area', component: AreaComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'performance-sales', component: PerformanceSalesComponent },
  { path: 'people-counter', component: PeopleCounterComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartsModule,
    ColorPickerModule
  ],
  declarations: [
    DonutComponent,
    AreaComponent,
    BarComponent,
    LineComponent,
    TenantsComponent,
    OverviewComponent,
    PerformanceSalesComponent,
    PeopleCounterComponent
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class ReportModule { }
