import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {

  public tenantData1: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public tenantData2: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public tenantTR: any = [this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000), this.dataservice.getRandomNumber(5000000, 20000000),];
  public memberSpending: any = this.tenantData1;
  public comparisonData: any = [this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12), this.dataservice.getRandomNumber(7, 12),];
  public dayLabels: any = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public tenantLabels: any = [ 'KFC', 'McDonalds', 'H&M', 'Retro', 'Carrefour', 'Gramedia', 'Pepper Lunch'];
  public chartType: any = {
    bar: 'bar',
    line: 'line',
    horizontalBar: 'horizontalBar'
  };
  public datasetsTenant1: any = [{
    data: this.tenantData1,
    label: 'Spending',
  }];
  public datasetsTenant2: any = [{
    data: this.tenantData2,
    label: 'Spending',
  }];
  public datasetsTr: any = [{
    data: this.tenantTR,
    label: 'TR record',
  }];
  public datasetsMember: any = [{
    data: this.memberSpending,
    label: 'Member Spending'
  }];
  public datasetsTrMember: any = [{
    data: this.comparisonData,
    label: 'TR Record VS Memebr Spending',
    fill: false,
    lineTension: 0
  }];

  public ChartOptions: any = {
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

  public ChartOptionsLine: any = {
    legend: {
      position: 'bottom'
    },
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
  public ChartOptionsBar: any = {
    legend: {
      position: 'bottom'
    },
    scaleShowGridLines: false,
    responsive: true,
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
  public ChartOptionsBarStacked: any = {
    legend: {
      position: 'bottom'
    },
    scaleShowGridLines: false,
    responsive: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
        },
        stacked: true
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
        },
        stacked: true
      }]
    }
  };

  constructor(public dataservice: DataService) {
    console.log(this.datasetsTenant1)
  }

  ngOnInit() {
  }

}
