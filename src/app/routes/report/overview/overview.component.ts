import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  public optionChart1: any; // traffic vs spending
  public optionChart2: any; // people traffic
  public optionChart3: any; // avg spending member
  public optionChart4: any; // member tier
  public optionChart5: any; // cars
  public optionChart6: any; // motorbikes
  public optionChart7: any; // taxi

  public spendingData: any = [this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000), this.dataservice.getRandomNumber(500000, 2000000)];
  public trafficPeople: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public memberGold: any = [this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50)]
  public memberPlatinum: any = [this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50), this.dataservice.getRandomNumber(10, 50)]
  public trafficCar: any = [this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60), this.dataservice.getRandomNumber(10, 60)];
  public trafficMotorbikes: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public trafficTaxi: any = [this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300), this.dataservice.getRandomNumber(10, 300)];
  public dayLabels: any = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public ChartOptions: string = 'options';
  constructor(public dataservice: DataService) {
    this.optionChart1 = [
      {
        type: 'bar',
        label: 'Spending',
        data: this.spendingData,
        backgroundColour: 'Red'
      },
      {
        type: 'line',
        label: 'Traffic',
        data: this.trafficPeople,
        backgroundColour: 'Blue'
      }
    ]

    console.log(this.spendingData);
    console.log(this.trafficPeople);
    console.log(this.optionChart1);
  }

  ngOnInit() {
  }

}
