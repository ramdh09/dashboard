import {Component, ViewChild, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';
const swal = require('sweetalert');

@Component({
  selector: 'app-performance-sales',
  templateUrl: './performance-sales.component.html',
  styleUrls: ['./performance-sales.component.scss']
})
export class PerformanceSalesComponent implements OnInit {
  @ViewChild('testChart') public testChart: BaseChartDirective;

  seriesColor = '#2ca888';
  oldSeriesColor = '#555555';
  cpToggle = false;

  public dataSales: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public datasetsSales: any = [{
    label: 'Spending',
    data: this.dataSales,
  }];

  public chartColors: any[] = [
    {
      backgroundColor:this.seriesColor
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
  public dataSpending: any;

  public clickChart(e: any) {
    try {
      const indexData = e.active[0]._index;
      this.dataservice.getQuery('spending-data')
        .subscribe(
          data => {
            this.dataSpending = data;
            this.reloadChart();
          },
          error => {
            this.dataservice.handleError;
          }
        )
      ;
    }
    catch (err){
      console.log(err.message);
      swal('Please click on chart series !');
    }
    // TODO : Create drilldown function
  }

  // Call this function after make an async request for update data & labels
  reloadChart() {
    if (this.testChart !== undefined) {
      this.testChart.chart.destroy();
      this.testChart.chart = 0;
      this.testChart.datasets[0].data = this.dataSpending.data.spending;
      this.testChart.labels = this.dataSpending.data.categories;
      this.testChart.datasets[0].backgroundColor = this.dataSpending.data.backgroundColor;
      console.log(this.dataSpending);
      //this.testChart.chart.update();
      this.testChart.ngOnInit();
    }
  };

  renderColor(event){
    console.log(event);
    setTimeout(() =>  {
      if (this.seriesColor !== this.oldSeriesColor){
        console.log('Warna baru');
        console.log(this.seriesColor);
      } else {
        console.log('Warna lama');
      }
    }, 2000);
    // console.log('Rendering in : ' + this.seriesColor);
    // TODO : Re-render chart after color change
  }

  constructor(public dataservice: DataService) {
    // TODO : Add drilldown request
  }

  ngOnInit(){
  }

}
