import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import { Recouvrements } from '../models/recouvrements';
import {
  ApexYAxis,
  ApexGrid
} from "ng-apexcharts";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill,
  ApexMarkers
} from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
  ApexPlotOptions,
  ApexStates,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

import { CanColor } from '@angular/material/core';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  fill:ApexFill;
  markers: ApexMarkers;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: CanColor
};
export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: any;
  stroke: ApexStroke;
  states: ApexStates;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};

export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};


@Component({
  selector: 'app-dashboard-interface',
  templateUrl: './dashboard-interface.component.html',
  styleUrls: ['./dashboard-interface.component.css']
})
export class DashboardInterfaceComponent  implements OnInit {
  chartOptions3: any;
  chartOptions: any = {
    series: [{
      name: 'Ventes',
      data: [31, 40, 100, 51, 42, 82, 56],
    }, {
      name: 'Recouvrements',
      data: [80, 32, 45, 32, 34, 52, 41]
    }, {
      name: 'Echec',
      data: [15, 11, 32, 150, 9, 24, 200]
    }],
    chart: {
      height: 250,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 4
    },
    colors: ['#4154f1', '#2eca6a', '#012a4a'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    
    xaxis: {
      type: "datetime",
      categories: [
        "2015-09-19T00:00:00.000Z",
        "2016-09-19T01:30:00.000Z",
        "2017-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2019-09-19T04:30:00.000Z",
        "2021-09-19T05:30:00.000Z",
        "2023-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  };
  getFormatDate(d:any)
  {
   return this.rs.getMyFormat(d);
  }
  chartOptions2: any;
  recouvrements: any[]=[];
  me: any;
  p:number =1;
  p2:number =1;
  employeProfil: any;
  constructor(public rs:RestService){
    
  }
  ventes:any; a:any=0; b:any=0;
  montantsCalculesV: number[] = [];
  montantsCalculesVEmployee: any[] = [];
  montantsCalculesR: number[]=[];
  occurrences: { [key: number]: number } = { 0: 0, 1: 0, 2: 0 };
  occurrencesR: { [key: number]: number } = { 0: 0, 1: 0, 2: 0 };

  comparer = (a:any, b:any) => {
    const timeA = a.createdAt.seconds;
    const timeB = b.createdAt.seconds;
  
    if (timeA > timeB) {
      return -1;
    } else if (timeA < timeB) {
      return 1;
    } else {
      return 0;
    }
  };
  maxIndex:any;
  //****************************************************************************************************************** */
  ngOnInit(): void {
    this.rs.getData("Ventes").then((data) => {
      this.ventes=data;
      this.ventes.sort(this.comparer);
      this.compterOccurrencesStatus(this.ventes);
      this.ventes.map((vente: any) => {
        if(vente.status ===1)
        { this.montantsCalculesV.push(this.calculMontantV(vente));}
      });
     
    for (let i = 0; i < this.montantsCalculesV.length; i++) 
    {   const item = this.montantsCalculesV[i];
        this.a=this.a + item;
    }
    this.maxIndex = this.montantsCalculesV.reduce((maxIndex, currentValue, currentIndex) => {
      if (currentValue > this.montantsCalculesV[maxIndex]) {
        return currentIndex;
      } else {
        return maxIndex;
      }
    }, 0);
    
    this.chartOptions3 ={
      series: [
        {
          name: "distibuted",
          data: [this.occurrences[0], this.occurrences[1], this.occurrences[2]]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        }
      ,
      colors: [
        "#008FFB",
        "#FF4560",
        "#26a69a",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["En cours", ""],
          ["Succès", ""],
          ["Sans Succès", ""],
        ],
        labels: {
          style: {
            colors: [
              "#546E7A",
              "#546E7A",
              "#546E7A",
            ],
            fontSize: "12px"
          }
        }
      }
    };
    
    })
    
    



//*********************************************************************************************************************/
    this.rs.getData("Recouvrement").then((data) => {
      this.recouvrements=data;
      this.recouvrements.sort(this.comparer);
      this.compterOccurrencesStatusR(this.recouvrements)
      this.recouvrements.map(rec => {
        this.montantsCalculesR.push(this.calculMontantR(rec));
      });
      for (let i = 0; i < this.montantsCalculesR.length; i++) 
    {   const item = this.montantsCalculesR[i];
        this.b=this.b + item;
    }
    
    this.chartOptions2={
      series: [this.occurrencesR[0],this.occurrencesR[1],this.occurrencesR[2]],
      chart: {
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["En cours", "Succès", " Sans succès"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      theme: {
        palette: "palette2"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    
   
    })

  }
 //****************************************************************************************************************** */
  calculMontantV(vente:any): number{
    let a:number=0;    
    if (vente.status === 1 )
    { this.montantsCalculesVEmployee.push(vente.employee);
    for (let i = 0; i < vente.produits.length; i++) 
    { const item = vente.produits[i];
      a=a+item.vendu;
    }
    }
  return a;
   }

   calculMontantR(rec:any): number{
    let a:number=0;    
    if (rec.status === 1 )
    {
    for (let i = 0; i < rec.factures.length; i++) 
    { 
      const item = rec.factures[i];
      a=a+item.montantPaye;
    }
    
   }
    return a;
      }

      compterOccurrencesStatus(elements: any[]): any {
        
        elements.forEach((element) => {
          const status = element.status;
          if (this.occurrences[status] === undefined) {
            this.occurrences[status] = 1;
          } else {
            this.occurrences[status]++;
          }
        });
        return this.occurrences;
      }
      compterOccurrencesStatusR(elements: any[]): any {
  
        elements.forEach((element) => {
          const status = element.status;
          if (this.occurrencesR[status] === undefined) {
            this.occurrencesR[status] = 1;
          } else {
            this.occurrencesR[status]++;
          }
        });
      
        return this.occurrencesR;
      }
    
}
