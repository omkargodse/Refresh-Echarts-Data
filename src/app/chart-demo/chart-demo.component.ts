import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

import { generate } from 'rxjs';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit {
  chartOptions: any;
  chartVar:any;

  constructor() { }

  ngOnInit(): void {
      this.generateGraph();      
  }

  onChartInit(ec) {
    this.chartVar = ec;
  }

  generateGraph(){
    this.chartOptions=({
      title: {
        text: 'Step Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Step Start', 'Step Middle', 'Step End']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Step Start',
          type: 'line',
          step: 'start',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Step Middle',
          type: 'line',
          step: 'middle',
          data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
          name: 'Step End',
          type: 'line',
          step: 'end',
          data: [450, 432, 401, 454, 590, 530, 510]
        }
      ]
    });
  }


  addToLegend(){  
    const option={
      legend:{
        data:['Step Start','Step middle','Step end']
      },
      xAxis: {
        type: 'category',
        data: ['x','y','z']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Step Start',
          type: 'line',
          step: 'start',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Step middle',
          type: 'line',
          step: 'start',
          data: [12, 132, 121, 154, 20, 23, 20]
        },
        {
          name: 'Step end',
          type: 'line',
          step: 'start',
          data: [170, 232, 321, 121, 190, 430, 810]
        },
      ]
    }
    this.chartVar.setOption(option);
  }
}
