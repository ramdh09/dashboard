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
  public ChartOptionsMultiAxis: any = {
    legend: {
      position: 'bottom'
    },
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
    this.datasetsChart1 = [
      {
        type: 'bar',
        label: 'Spending',
        data: this.spendingData,
        backgroundColour: 'rgba(153, 220, 111, 1)',
      },
      {
        type: 'line',
        label: 'Traffic',
        data: this.trafficPeople,
        fillColor: 'Blue',
        lineTension: 0,
        fill: false,
        yAxisID: 'traffic'
      }
    ];
    this.datasetsChart2 = [{
      label: 'Traffic',
      data: this.trafficPeople,
      fillColor: 'Green',
    }];
    this.datasetsChart3 = [{
      label: 'Spending',
      data: this.spendingData,
      fillColor: 'Blue',
    }];
    this.datasetsChart4 = [{
      label: 'Gold Member',
      data: this.memberGold,
      fillColor: 'Gold',
    }, {
      label: 'Platinum Member',
      data: this.memberGold,
      fillColor: 'Silver',
    }];
    this.datasetsChart5 = [{
      label: 'Cars',
      data: this.trafficCar,
      fillColor: 'Red',
      fill: false,
      lineTension: 0
    }];
    this.datasetsChart6 = [{
      label: 'Motorbikes',
      data: this.trafficMotorbikes,
      fillColor: 'Green',
      fill: false,
      lineTension: 0
    }];
    this.datasetsChart7 = [{
      label: 'Taxi',
      data: this.trafficTaxi,
      fillColor: 'Blue',
      fill: false,
      lineTension: 0
    }];

    console.log(this.spendingData);
    console.log(this.trafficPeople);
    console.log(this.datasetsChart1);
  }

  ngOnInit() {
  }

}
