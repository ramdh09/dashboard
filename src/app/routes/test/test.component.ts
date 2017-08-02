import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  chart: Object;
  options: Object;
  test: string;
  public myData = [];

  saveInstance(chartInstance): void {
    this.chart = chartInstance;
    // [load]="saveInstance($event.context)"
  }

  constructor() {
    console.log('test om !');

    this.options = {
      title: {text: 'simple chart'},
      series: [{
        data: [this.getRandomInt(1,50), this.getRandomInt(1,50), this.getRandomInt(1,50), this.getRandomInt(1,50)],
      }]
    };

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 11; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  testEvent() {
    console.log('button clicked !');
    this.test = this.makeid();
    this.myData = [this.getRandomInt(1,50), this.getRandomInt(1,50), this.getRandomInt(1,50), this.getRandomInt(1,50)];
    // this.chart.series[0].setData(this.myData);

    console.log(this.myData);
    console.log(this.options['series'].data);
    // this.chart.series[0].setData(myData);
  }

  ngOnInit(): void {
  }
}
