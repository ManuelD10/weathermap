import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

    $(function () {
        var myChart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 5, 40]
            }, {
                name: 'John',
                data: [2, 8, 30]
            }]
        });
    });

    var chart1; // globally available
    $(function() {
         chart1 = Highcharts.stockChart('container', {
           rangeSelector: {
              selected: 1
           },
           series: [{
              name: 'USD to EUR',
              data: usdtoeur // predefined JavaScript array
           }]
        });
     });


  }

  ngOnInit() {
  }

}
