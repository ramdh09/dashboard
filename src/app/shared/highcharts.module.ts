/**
 * Created by Fajar on 31/07/2017.
 */
import {NgModule} from '@angular/core';
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  imports: [
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/modules/exporting')
    )
  ],
  declarations: [],
  bootstrap: []
})
export class HighchartModule {
}
