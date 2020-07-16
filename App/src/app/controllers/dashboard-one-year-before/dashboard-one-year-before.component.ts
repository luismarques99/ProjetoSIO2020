import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import * as CanvasJS from "../../../assets/canvasjs.min";

@Component({
  selector: 'app-dashboard-one-year-before',
  templateUrl: './dashboard-one-year-before.component.html',
  styleUrls: ['./dashboard-one-year-before.component.css']
})
export class DashboardOneYearBeforeComponent implements OnInit {

  saftFile: any;
  purchasesValuePerMonth: number[];
  salesValuePerMonth: number[];
  salesValuePerTrimester: number[];
  productsTotalValues: any[];
  productsCategoryTotalValues: any[];
  customersTotalValues: any[];

  constructor(public rest: RestService) { }

  ngOnInit(): void {
    this.rest.getOneYearBeforeSaftFile().subscribe((data: {}) => {
      console.log(data);
      this.saftFile = data;

      const salesInvoices = this.saftFile.data.SourceDocuments[0].SalesInvoices[0].Invoice;
      const products = this.saftFile.data.MasterFiles[0].Product;
      const customers = this.saftFile.data.MasterFiles[0].Customer;

      const GRAPTH_TITLE_FONT_SIZE = 18;

      // Sales pre trimester chart
      this.salesValuePerTrimester = (() => {
        const totalSales = this.saftFile.data.GeneralLedgerEntries[0].Journal[1].Transaction;
        let salesArray: number[] = [];
        let totalValue: number;

        for (let j = 0; j < 4; j++) {
          totalValue = 0;

          for (let i = 0; i < totalSales.length; i++) {
            const period: number = parseInt(totalSales[i].Period[0]);

            if (this.monthNumberToTrimester(period) == j) {
              totalValue += parseFloat(totalSales[i].Lines[0].DebitLine[0].DebitAmount[0]);
            }
          }
          salesArray.splice(j, 0, totalValue);
        }
        return salesArray;
      })();
      const salesPerTrimesterChart = new CanvasJS.Chart("salesPerTrimesterChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Sales Per Trimester",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        data: [{
          type: "doughnut",
          startAngle: 0,
          indexLabelFontSize: 10,
          yValueFormatString: "#,###.##€",
          dataPoints: (() => {
            const points: any[] = [];
            for (let i = 0; i < this.salesValuePerTrimester.length; i++) {
              points.splice(i, 0, {
                y: this.salesValuePerTrimester[i],
                label: this.trimesterNumberToString(i)
              });
            }
            return points;
          })()
        }]
      });
      salesPerTrimesterChart.render();

      // Sales and purchases chart
      this.salesValuePerMonth = (() => {
        const totalSales = this.saftFile.data.GeneralLedgerEntries[0].Journal[1].Transaction;
        let salesArray: number[] = [];
        let totalValue: number;

        for (let j = 0; j < 12; j++) {
          totalValue = 0;

          for (let i = 0; i < totalSales.length; i++) {
            const period: number = parseInt(totalSales[i].Period[0]);

            if (period == j + 1) {
              totalValue += parseFloat(totalSales[i].Lines[0].DebitLine[0].DebitAmount[0]);
            }
          }
          salesArray.splice(j, 0, totalValue);
        }
        return salesArray;
      })();
      this.purchasesValuePerMonth = (() => {
        const totalPurchases = this.saftFile.data.GeneralLedgerEntries[0].Journal[0].Transaction;
        let purchasesArray: number[] = [];
        let totalValue: number;

        for (let j = 0; j < 12; j++) {
          totalValue = 0;

          for (let i = 0; i < totalPurchases.length; i++) {
            const period: number = parseInt(totalPurchases[i].Period[0]);

            if (period == j + 1) {
              totalValue += parseFloat(totalPurchases[i].Lines[0].DebitLine[0].DebitAmount[0]);
            }
          }
          purchasesArray.splice(j, 0, totalValue);
        }
        return purchasesArray;
      })();
      const salesChart = new CanvasJS.Chart("salesChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Transactions Record",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        axisX: {
          interval: 1,
          title: "Months",
          titleFontSize: 18,
          labelFontSize: 12
        },
        axisY: {
          interval: 50000,
          title: "Amount",
          titleFontSize: 18,
          suffix: "€"
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          horizontalAlign: "center",
          dockInsidePlotArea: true
          // itemclick: toogleDataSeries
        },
        data: [
          {
            type: "line",
            name: "Sales",
            // lineColor: "#16b900",
            markerSize: 0,
            showInLegend: true,
            yValueFormatString: "#,###.##€",
            dataPoints: (() => {
              const points: any[] = [];
              for (let i = 0; i < this.salesValuePerMonth.length; i++) {
                points.splice(i, 0, {
                  y: this.salesValuePerMonth[i],
                  label: this.monthNumberToString(i + 1)
                  // color: "#16b900"
                });
              }
              return points;
            })()
          },
          {
            type: "line",
            name: "Purchases",
            // lineColor: "red",
            markerSize: 0,
            showInLegend: true,
            yValueFormatString: "#,###.##€",
            dataPoints: (() => {
              const points: any[] = [];
              for (let i = 0; i < this.purchasesValuePerMonth.length; i++) {
                points.splice(i, 0, {
                  y: this.purchasesValuePerMonth[i],
                  label: this.monthNumberToString(i + 1)
                  // color: "red"
                });
              }
              return points;
            })()
          }
        ]
      });
      salesChart.render();

      // Purchases chart
      // const purchasesChart = new CanvasJS.Chart("purchasesChartContainer", {
      //   theme: "light1",
      //   animationEnabled: true,
      //   exportEnabled: true,
      //   title: {
      //     text: "Purchases",
      //     fontSize: GRAPTH_TITLE_FONT_SIZE
      //   },
      //   data: [{
      //     type: "column",
      //     dataPoints: (() => {
      //       const points: any[] = [];
      //       for (let i = 0; i < this.purchasesValuePerMonth.length; i++) {
      //         points.splice(i, 0, {
      //           y: this.purchasesValuePerMonth[i],
      //           label: this.monthNumberToString(i + 1)
      //         });
      //       }
      //       return points;
      //     })()
      //   }]
      // });
      // purchasesChart.render();


      // Products category total values
      this.productsCategoryTotalValues = (() => {
        let productsArray: any[] = [];
        let totalNumber: number;
        let totalValue: number;
        let add: boolean;

        for (let i = 0; i < products.length; i++) {
          let productCategory = products[i].ProductGroup[0];
          totalNumber = 0;
          totalValue = 0;
          add = true;

          for (let j = 0; j < salesInvoices.length; j++) {
            for (let k = 0; k < salesInvoices[j].Line.length; k++) {
              let saleLine = salesInvoices[j].Line[k];
              if (this.productCodeToCategory(saleLine.ProductCode[0], products) == productCategory) {
                totalNumber += parseInt(saleLine.Quantity[0]);
                totalValue += parseFloat(saleLine.CreditAmount[0]);
              }
            }
          }

          for (let j = 0; j < productsArray.length; j++) {
            if (productsArray[j][0] == productCategory) add = false;
          }
          if (add) productsArray.splice(i, 0, [productCategory, totalNumber, totalValue]);
        }
        return productsArray;
      })();
      const productsCategorySoldRevenueChart = new CanvasJS.Chart("productsCategorySoldRevenueChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Revenue Per Product Category",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        data: [{
          type: "doughnut",
          indexLabelFontSize: 11,
          yValueFormatString: "#,###.##€",
          dataPoints: (() => {
            const points: any[] = [];
            for (let i = 0; i < this.productsCategoryTotalValues.length - 1; i++) {
              points.splice(i, 0, {
                y: this.productsCategoryTotalValues[i][2],
                label: this.productsCategoryTotalValues[i][0],
              });
            }
            return points;
          })()
        }]
      });
      productsCategorySoldRevenueChart.render();

      // Products total values charts
      this.productsTotalValues = (() => {
        let productsArray: any[] = [];
        let totalNumber: number;
        let totalValue: number;

        for (let i = 0; i < products.length; i++) {
          let productCode = products[i].ProductCode[0];
          totalNumber = 0;
          totalValue = 0;

          for (let j = 0; j < salesInvoices.length; j++) {
            for (let k = 0; k < salesInvoices[j].Line.length; k++) {
              let saleLine = salesInvoices[j].Line[k];
              if (saleLine.ProductCode[0] == productCode) {
                totalNumber += parseInt(saleLine.Quantity[0]);
                totalValue += parseFloat(saleLine.CreditAmount[0]);
              }
            }
          }
          productsArray.splice(i, 0, [productCode, totalNumber, totalValue]);
        }
        return productsArray;
      })();
      // const productsSoldQuantityChart = new CanvasJS.Chart("productsSoldQuantityChartContainer", {
      //   theme: "light1",
      //   animationEnabled: true,
      //   exportEnabled: true,
      //   title: {
      //     text: "Units Sold Of Each Product",
      //     fontSize: GRAPTH_TITLE_FONT_SIZE
      //   },
      //   axisX: {
      //     interval: 1,
      //     labelFontSize: 10
      //   },
      //   axisY: {
      //     title: "Number of units",
      //     titleFontSize: 15,
      //     labelFontSize: 12,
      //   },
      //   data: [{
      //     type: "bar",
      //     dataPoints: (() => {
      //       const points: any[] = [];
      //       for (let i = 0; i < this.productsTotalValues.length - 1; i++) {
      //         points.splice(i, 0, {
      //           y: this.productsTotalValues[i][1],
      //           label: this.productCodeToDescription(this.productsTotalValues[i][0], products)
      //         });
      //       }
      //       return points;
      //     })()
      //   }]
      // });
      // productsSoldQuantityChart.render();
      const productsSoldRevenueChart = new CanvasJS.Chart("productsSoldRevenueChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Revenue Per Product",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        axisX: {
          interval: 1,
          labelFontSize: 11
        },
        axisY: {
          interval: 20000,
          title: "Revenue",
          titleFontSize: 15,
          labelFontSize: 12,
          suffix: "€"
        },
        data: [{
          type: "bar",
          yValueFormatString: "#,###.##€",
          dataPoints: (() => {
            const points: any[] = [];
            for (let i = 0; i < this.productsTotalValues.length - 1; i++) {
              points.splice(i, 0, {
                y: this.productsTotalValues[i][2],
                label: this.productCodeToDescription(this.productsTotalValues[i][0], products)
              });
            }
            return points;
          })()
        }]
      });
      productsSoldRevenueChart.render();


      // Customer total values charts
      this.customersTotalValues = (() => {
        let customersArray: any[] = [];
        let totalSales: number;
        let totalRevenue: number;

        for (let i = 0; i < customers.length; i++) {
          let customerCode = customers[i].CustomerID[0];
          totalSales = 0;
          totalRevenue = 0;

          for (let j = 0; j < salesInvoices.length; j++) {
            if (salesInvoices[j].CustomerID[0] == customerCode) {
              totalSales++;
              totalRevenue += parseFloat(salesInvoices[j].DocumentTotals[0].GrossTotal[0]);
            }
          }
          customersArray.splice(i, 0, [customerCode, totalSales, totalRevenue]);
        }
        return customersArray;
      })();
      const customersNumberOfPurchasesChart = new CanvasJS.Chart("customersNumberOfPurchasesChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Customers Total Purchases",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        data: [{
          type: "doughnut",
          startAngle: 0,
          indexLabelFontSize: 11,
          dataPoints: (() => {
            const points: any[] = [];
            for (let i = 1; i < this.customersTotalValues.length; i++) {
              points.splice(i, 0, {
                y: this.customersTotalValues[i][1],
                label: this.customerCodeToName(this.customersTotalValues[i][0], customers)
              });
            }
            return points;
          })()
        }]
      });
      customersNumberOfPurchasesChart.render();
      const customersRevenueChart = new CanvasJS.Chart("customersRevenueChartContainer", {
        theme: "light1",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Customers Revenue",
          fontSize: GRAPTH_TITLE_FONT_SIZE
        },
        axisX: {
          interval: 1,
          labelFontSize: 13
        },
        axisY: {
          interval: 50000,
          title: "Revenue",
          titleFontSize: 15,
          labelFontSize: 12,
          suffix: "€"
        },
        data: [{
          type: "bar",
          yValueFormatString: "#,###.##€",
          dataPoints: (() => {
            const points: any[] = [];
            for (let i = 1; i < this.customersTotalValues.length; i++) {
              points.splice(i, 0, {
                y: this.customersTotalValues[i][2],
                label: this.customerCodeToName(this.customersTotalValues[i][0], customers)
              });
            }
            return points;
          })()
        }]
      });
      customersRevenueChart.render();
    });
  }

  monthNumberToString(month: number): string {
    if (month == 1) return "January";
    else if (month == 2) return "February";
    else if (month == 3) return "March";
    else if (month == 4) return "April";
    else if (month == 5) return "May";
    else if (month == 6) return "June";
    else if (month == 7) return "July";
    else if (month == 8) return "August";
    else if (month == 9) return "September";
    else if (month == 10) return "October";
    else if (month == 11) return "November";
    else return "December";
  }

  monthNumberToTrimester(month: number): number {
    if (month < 4) return 0;
    else if (month < 7) return 1;
    else if (month < 10) return 2;
    else return 3;
  }

  trimesterNumberToString(trimester: number): string {
    if (trimester == 0) return "1st trimester";
    else if (trimester == 1) return "2nd trimester";
    else if (trimester == 2) return "3rd trimester";
    else return "4th trimester";
  }

  productCodeToDescription(productCode: string, productsArray: any[]): string {
    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].ProductCode[0] == productCode) return productsArray[i].ProductDescription[0];
    }
  }

  productCodeToCategory(productCode: string, productsArray: any[]): string {
    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].ProductCode[0] == productCode) return productsArray[i].ProductGroup[0];
    }
  }

  customerCodeToName(customerCode: string, customersArray: any[]): string {
    for (let i = 0; i < customersArray.length; i++) {
      if (customersArray[i].CustomerID[0] == customerCode) return customersArray[i].CompanyName[0];
    }
  }
}
