import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChartComponent, ChartOptions } from 'chart.js';
import { ChartComponent } from "ng-apexcharts";
import {
	ApexNonAxisChartSeries,
	ApexResponsive,
	ApexChart
  } from "ng-apexcharts";
  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    };
    


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOptions: any;
	@ViewChild("chart")
	chart!: ChartComponent; 
	// public chartOptions: Partial<ChartOptions>;
  
	
  constructor() {
   
  }
 
  ngOnInit(): void {
    this.charts()
  }

 charts(){
  this.chartOptions = {
    series: [44, 55, 13, 43, 22,25,28],
    chart: {
      width: 270,
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E","Team F","Team G"],
    
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
 }
  
  }

  


  



