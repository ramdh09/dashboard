import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  public datasetsChart1: any; // traffic vs spending
  public datasetsChart2: any; // people traffic
  public datasetsChart3: any; // avg spending member
  public datasetsChart4: any; // member tier
  public datasetsChart5: any; // cars
  public datasetsChart6: any; // motorbikes
  public datasetsChart7: any; // taxi

  public chartType: any = {
    bar: 'bar',
    line: 'line',
  };
  public spendingData: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public trafficPeople: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public memberGold: any = [this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50)]
  public memberPlatinum: any = [this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50)]
  public trafficCar: any = [this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60)];
  public trafficMotorbikes: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public trafficTaxi: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];


  public dayLabels: any = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public ChartOptions: any = {
    scaleShowGridLines: false,
    responsive: true,
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

  public ChartOptions2: any = {
    scaleShowGridLines: false,
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (t, d) {
          if (t.datasetIndex === 0) {
            return t.yLabel + ' People';
          } else if (t.datasetIndex === 1) {
            if (t.yLabel.toString().length === 9) {
              return Math.round(+t.yLabel.toString().replace(/(\d{3})(.*)/, '$1.$2')) + 'M';
            } else return Math.round(+t.yLabel.toString().replace(/(\d{2})(.*)/, '$1.$2')) + 'M';
          }
        }
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join('.');
            return value + ' People';
          }
        }
      }]
    }
  };

  public ChartOptions3: any = {
    scaleShowGridLines: false,
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (t, d) {
          if (t.datasetIndex === 0) {
            return t.yLabel;
          } else if (t.datasetIndex === 1) {
            if (t.yLabel.toString().length === 9) {
              return Math.round(+t.yLabel.toString().replace(/(\d{3})(.*)/, '$1.$2')) + 'M';
            } else return Math.round(+t.yLabel.toString().replace(/(\d{2})(.*)/, '$1.$2')) + 'M';
          }
        }
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
          // color: "rgba(0, 0, 0, 0)",
          // offsetGridLines: false
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
          // color: "rgba(0, 0, 0, 0)",
          // offsetGridLines: false
        },
        ticks: {
          beginAtZero: true,
          userCallback: function (value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join('.');
            return value;
          }
        }
      }]
    }
  };

  public ChartOptions4: any = {
    scaleShowGridLines: false,
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (t, d) {
          return t.yLabel;
        }
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
          // color: "rgba(0, 0, 0, 0)",
          // offsetGridLines: false
        },
        stacked: true
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawOnChartArea: false
          // color: "rgba(0, 0, 0, 0)",
          // offsetGridLines: false
        },
        stacked: true,
        ticks: {
          beginAtZero: true,
          userCallback: function (value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join('.');
            return value;
          }
        }
      }]
    }
  };

  constructor(public dataservice: DataService) {
    this.datasetsChart1 = [
      {
        type: 'bar',
        label: 'Spending',
        data: this.spendingData,
        // fillColor: 'Green',
        backgroundColour: 'rgba(153, 220, 111, 1)',
        // yAxisID: 'spending'
      },
      {
        type: 'line',
        label: 'Traffic',
        data: this.trafficPeople,
        fillColor: 'Blue',
        yAxisID: 'traffic'
      }
    ];
    this.datasetsChart2 = [{
      label: 'Traffic',
      data: this.trafficPeople,
      fillColor: 'Green',
      // yAxisID: 'traffic'
    }];
    this.datasetsChart3 = [{
      label: 'Spending',
      data: this.spendingData,
      fillColor: 'Blue',
      // yAxisID: 'traffic'
    }];
    this.datasetsChart4 = [{
      label: 'Gold Member',
      data: this.memberGold,
      fillColor: 'Gold',
      // yAxisID: 'traffic'
    }, {
      label: 'Platinum Member',
      data: this.memberGold,
      fillColor: 'Silver',
    }];
    this.datasetsChart5 = [{
      label: 'Cars',
      data: this.trafficCar,
      fillColor: 'Red',
    }];
    this.datasetsChart6 = [{
      label: 'Motorbikes',
      data: this.trafficMotorbikes,
      fillColor: 'Green',
    }];
    this.datasetsChart7 = [{
      label: 'Taxi',
      data: this.trafficTaxi,
      fillColor: 'Blue',
    }];

    console.log(this.spendingData);
    console.log(this.trafficPeople);
    console.log(this.datasetsChart1);
  }

  ngOnInit() {
  }

}
