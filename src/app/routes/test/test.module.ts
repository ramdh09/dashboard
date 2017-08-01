/**
 * Created by Fajar on 31/07/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {ChartModule} from 'angular2-highcharts';

import {TestComponent} from './test.component';
const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  declarations: [TestComponent],
  exports: [
    RouterModule
  ]
})
export class TestModule {}
