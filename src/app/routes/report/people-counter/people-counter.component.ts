import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.scss']
})
export class PeopleCounterComponent implements OnInit {

  public spendingData: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public trafficPeople: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public trafficCar: any = [this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60)];
  public trafficMotorbikes: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public trafficTaxi: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];

  public dayLabels: any = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public ChartOptionsMultiAxis: any = {
    legend: {
      position: 'bottom'
    },
    scaleShowGridLines: false,
    responsive: false,
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (t, d) {
          if (t.datasetIndex === 0) {
            let x = Math.round(+t.yLabel.toString().replace(/(\d{3})(.*)/, '$1.$2')) + 'M';
            return 'Rp. ' + x;
            //return t.yLabel + ' People';
          } else if (t.datasetIndex === 1) {
            return t.yLabel + ' People';
          }
        }
      }
    },
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
        ticks: {
          beginAtZero: true,
          userCallback: function (value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join('.');
            return 'Rp. ' + value;
          }
        }
      }, {
        position: "right",
        id: "traffic"
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
  };
  public datasetsSpending = [
    {
      type: 'bar',
      label: 'Spending',
      data: this.spendingData,
      backgroundColour: 'rgba(153, 220, 111, 1)',
    }
  ];
  public datasetsTraffic = [{
    label: 'Traffic',
    data: this.trafficPeople,
    fillColor: 'Green',
    lineTension: 0
  }];

  public datasetsCars = [{
    label: 'Cars',
    data: this.trafficCar,
    fillColor: 'Red',
    fill: false,
    lineTension: 0
  }];
  public datasetsMotorbikes = [{
    label: 'Motorbikes',
    data: this.trafficMotorbikes,
    fillColor: 'Green',
    fill: false,
    lineTension: 0
  }];
  public datasetsTaxi = [{
    label: 'Taxi',
    data: this.trafficTaxi,
    fillColor: 'Blue',
    fill: false,
    lineTension: 0
  }];
  public datasetsSpendingTraffic = [{
    type: 'bar',
    label: 'Spending',
    data: this.spendingData,
  },{
    type: this.chartType.line,
    label: 'Traffic',
    data: this.trafficPeople,
    fill: false,
    lineTension: 0,
    yAxisID: 'traffic'
  }]

  constructor(public dataservice: DataService) {
  }

  ngOnInit() {
  }

}
