import {Component, ViewChild, OnInit, OnChanges} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';
import $ from "jquery";

@Component({
  selector: 'app-performance-sales',
  templateUrl: './performance-sales.component.html',
  styleUrls: ['./performance-sales.component.scss']
})
export class PerformanceSalesComponent implements OnInit {
  @ViewChild('testChart') public testChart: BaseChartDirective;

  public dataSales: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public datasetsSales: any = [{
    label: 'Spending',
    data: this.dataSales
  }];
  public categoriesLabels: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public weeklyLabels: any = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
  public chartOption: any = {
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

  public clickChart(e: any) {
    let indexData = e.active[0]._index;
    let currentDataLabels = this.categoriesLabels[indexData];
    let currentDataValue = this.dataSales[indexData];
    let drilldownParams: any;
    let _chart = this.testChart;
    this.reloadChart();

    console.log(this.testChart);
    // TODO : Create drilldown function
  }

  // Call this function after make an async request for update data & labels
  reloadChart() {
    if (this.testChart !== undefined) {
      this.testChart.chart.destroy();
      this.testChart.chart = 0;

      this.testChart.datasets[0].data = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
      this.testChart.labels = this.weeklyLabels;
      this.testChart.options = this.chartOption;
      this.testChart.ngOnInit();
    }
  };

  constructor(public dataservice: DataService) {
    // TODO : Add drilldown request
  }

  ngOnInit() {

  }

}
