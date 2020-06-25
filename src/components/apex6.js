import React, {Component} from "react";
import moment from 'moment';
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
			
            series: [],
            options: {
			  annotations: {
				xaxis: [
				  {
					x: new Date("03/02/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("03/11/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("03/12/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("03/17/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("03/23/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("03/31/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("04/14/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("04/21/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				  {
					x: new Date("04/22/2020").getTime(),
					strokeDashArray: 0,
					borderColor: "#775DD0",
				  },
				],
			  },
              chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  enabled: true
                },
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: [1,1,8,8,8,8,8,8,8,8,8],
              },
			  colors:['#E91E63', '#ffea00'],
              fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [20, 100, 100, 100]
                  },
              },
               yaxis: [{
                title: {
                  text: "Twitter Volume/Day"
                },
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetX: 0,
                    formatter: function (value) {
                      return Math.trunc(value);
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
              },
              {
                title: {
                  text: "Positive Cases"
                },
                opposite: true,
                labels: {
                    style: {
                        colors: '#8e8da4',
                    },
                    offsetX: 0,
                    formatter: function (value) {
                    return Math.trunc(value);
                  }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
              }],
              
              xaxis: {
                type: 'datetime',
                tickAmount: 8,
                labels: {
                    rotate: -15,
                    rotateAlways: true,
                    formatter: function(val, timestamp) {
                      return moment(new Date(timestamp)).format("DD MMM")
                  }
                }
              },
              // title: {
              //   text: 'Twitter Volume/Day and Positive Cases',
              //   align: 'left',
              //   offsetX: 14
              // },
              tooltip: {
                shared: true
              },
              legend: {
				        showForZeroSeries: false,
                position: 'top',
                horizontalAlign: 'left',
                offsetX: -10
              },
			  noData: {
				text: 'No Data Available...'
			  }
            },
          
          
          };
        }
		
		test(){
			console.log('yo')
		}
		
        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.props.series} type="area" height={350} />
</div>
    

          );
        }
      }