/**
 * Created by Fajar on 02/08/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';
import { LineComponent } from './line/line.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'line', component: LineComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'area', component: AreaComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [
    DonutComponent,
    AreaComponent,
    BarComponent,
    LineComponent
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class ReportModule { }
