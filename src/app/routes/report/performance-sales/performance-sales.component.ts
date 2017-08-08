import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import $ from "jquery";

@Component({
  selector: 'app-performance-sales',
  templateUrl: './performance-sales.component.html',
  styleUrls: ['./performance-sales.component.scss']
})
export class PerformanceSalesComponent implements OnInit {

  public dataSales:any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public datasetsSales:any = [{
    label: 'Spending',
    data: this.dataSales
  }];
  public categoriesLabels: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOption:any = {
    scaleShowGridLines: false,
    responsive: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
        },
      }]
    }
  };
  public chartType: any = {
    bar: 'bar',
    line: 'line',
    horizontalBar: 'horizontalBar'
  };
  public drilldownLevel: any = {
    monthly: 'monthly',
    weekly: 'weekly',
    daily: 'daily',
    hourly: 'hourly',
  };
  public deepThroat(params:any){
    console.log(params);
  }
  public clickChart(e:any){
    let indexData = e.active[0]._index;
    let currentDataLabels = this.categoriesLabels[indexData];
    let currentDataValue = this.dataSales[indexData];
    let drilldownParams:any;
    // TODO : Create drilldown function
    console.log(e);
    console.log(e.datasets);
  }

  constructor(public dataservice: DataService) {
    // TODO : Add drilldown request
  }

  ngOnInit() {
    //$('.loader-inner').loaders();
  }

}
