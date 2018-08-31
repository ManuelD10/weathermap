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
                text: 'Temperatura'
            },
            xAxis: {
                categories: ['Bogotá', 'Cali', 'Cartagena']
            },
            yAxis: {
                title: {
                    text: 'Temperatura'
                }
            },
            series: [{
                name: 'Calor',
                data: [10, 25, 50]
            }, {
                name: 'Frio',
                data: [40, 15, 5]
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
