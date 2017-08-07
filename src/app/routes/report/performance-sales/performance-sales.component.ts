import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import $ from "jquery";

@Component({
  selector: 'app-performance-sales',
  templateUrl: './performance-sales.component.html',
  styleUrls: ['./performance-sales.component.scss']
})
export class PerformanceSalesComponent implements OnInit {

  public dataSales:any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];;
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

  clickChart(evt){
    console.log('chart clicked !')
    const chart = $('#sales-chart');
    const activePoints = chart.getElementsAtEvent(evt);
    const chartData = activePoints[0]['_chart'].config.data;
    const idx = activePoints[0]['_index'];
    const label = chartData.labels[idx];
    const value = chartData.datasets[0].data[idx];
    const url = "http://example.com/?label=" + label + "&value=" + value;
    alert(url);
  }
  constructor(public dataservice: DataService) {
    const chart = $('#sales-chart');
    // TODO : Add drilldown request
  }

  ngOnInit() {
  }

}
