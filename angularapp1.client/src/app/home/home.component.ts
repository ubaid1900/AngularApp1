import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class HomeComponent implements OnInit {

  chartDblClick($event: any) {
    this.subChartOption = {
      title: {
        text: `Weekly Sales for ${$event.name}`,
      },
      xAxis: {
        type: 'category',
        data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [$event.data/4 + 20, $event.data/4 - 20, $event.data/4 + 10, $event.data/4 - 10],
          type: 'bar',
        },
      ],
    },
      console.log($event);
  }

  constructor() { }

  ngOnInit() {

  }

  chartOption: EChartsOption = {
    title: { text: 'Monthly Sales' },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 0, 787, 760, 2067, 672],
        type: 'bar',
      },
    ],
  };

  subChartOption!: EChartsOption;
}
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}